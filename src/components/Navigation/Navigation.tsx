import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getLinkClass } from "../../utils";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Path } from "../../types/Path";
import { useTranslation } from "react-i18next";
import "./Navigation.scss";
import { NavBarLinks } from "../../types/NavBarLinks";

type Props = {
  className?: string;
  handleClick?: () => void;
};

const navLinkImages: Record<NavBarLinks, string> = {
  [NavBarLinks.Home]: "/images/home.png",
  [NavBarLinks.Reservation]: "/images/reservation.png",
  [NavBarLinks.Menu]: "/images/menu.png",
  [NavBarLinks.OurStory]: "/images/story.png",
  [NavBarLinks.Events]: "/images/events.png",
};

export const Navigation: React.FC<Props> = ({ className, handleClick }) => {
  const { t } = useTranslation();
  const { isAuthenticated } = useAppSelector(selectAuth);
  const [activeLink, setActiveLink] = useState<NavBarLinks | null>(null);

  return (
    <nav className={className ? `nav ${className}` : "nav"}>
      <ul className="nav__list">
        {Object.entries(NavBarLinks).map(([key, value]) => (
          <li className="nav__item" key={key}>
            <NavLink
              to={value}
              className={({ isActive }) => {
                if (isActive) setActiveLink(value as NavBarLinks);
                return getLinkClass({ isActive });
              }}
              onClick={handleClick}
            >
              {t(`nav.${key.toLowerCase()}`)}
            </NavLink>
          </li>
        ))}
        {isAuthenticated ? (
          <li className="nav__item">
            <NavLink
              to={Path.Account}
              className={getLinkClass}
              onClick={handleClick}
            >
              <UserCircleIcon className="h-6 w-6" />
            </NavLink>
          </li>
        ) : (
          <li className="nav__item">
            <NavLink
              to={Path.Login}
              className={getLinkClass}
              onClick={handleClick}
            >
              {t("nav.login")}
            </NavLink>
          </li>
        )}
      </ul>
      {activeLink && (
        <div className="nav__image-container">
          <img
            src={navLinkImages[activeLink]}
            alt={activeLink}
            className="nav__image"
          />
        </div>
      )}
    </nav>
  );
};
