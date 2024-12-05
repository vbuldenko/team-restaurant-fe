import React from "react";
import { Link } from "react-router";
import "./Logo.scss";

type Props = {
  className?: string;
};

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={className ? `logo ${className}` : "logo"}>
      <Link to="/">
        <img src="./icons/logo.png" alt="Logo" className="logo__image" />
        Illicium
      </Link>
    </div>
  );
};
