import { useState, useEffect } from "react";

const useTypingEffect = (
  message: string,
  speed: number = 50,
  loop: boolean = false
) => {
  const [displayedMessage, setDisplayedMessage] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId: NodeJS.Timeout;

    const typeWriter = () => {
      console.log("index - letter", index, message.charAt(index));
      if (index < message.length) {
        setDisplayedMessage((prev) => prev + message.charAt(index));
        index++;
        timeoutId = setTimeout(typeWriter, speed);
      } else if (loop) {
        // If looping, restart the typing effect
        timeoutId = setTimeout(() => {
          setDisplayedMessage("");
          index = 0;
          typeWriter();
        }, speed);
      }
    };

    setDisplayedMessage(""); // Reset displayed message when message prop changes
    typeWriter(); // Start the typing effect

    return () => clearTimeout(timeoutId); // Cleanup function to clear the timeout
  }, [message, speed, loop]);

  return displayedMessage;
};

export default useTypingEffect;
