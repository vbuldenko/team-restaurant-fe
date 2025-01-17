import React from "react";
import classNames from "classnames";
import useTypingEffect from "../../hooks/useTypingEffect";

interface NotificationProps {
  message: string;
  type?: "error" | "notification";
  className?: string; // Add custom className prop
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = "notification",
  className, // Destructure custom className prop
}) => {
  const displayedMessage = useTypingEffect(message);

  return (
    <div
      className={classNames(
        "p-4 rounded-lg text-center",
        {
          "bg-red-100 text-red-700": type === "error",
          "bg-green-100 text-green-700": type === "notification",
        },
        className // Include custom className
      )}
    >
      <p>{displayedMessage}</p>
    </div>
  );
};

export default Notification;
