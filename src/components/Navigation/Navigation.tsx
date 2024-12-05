// import React, { useState } from "react";
import { NavLink } from "react-router";
import { getLinkClass } from "../../utils";
import { useTranslation } from "react-i18next";
import "./Navigation.scss";
import { NavBarLinks } from "../../types/NavBarLinks";
import classNames from "classnames";

type Props = {
  className?: string;
  handleClick?: () => void;
};

// const navLinkImages: Record<NavBarLinks, string> = {
//   [NavBarLinks.Home]: "/images/navigation/home.png",
//   [NavBarLinks.Reservation]: "/images/navigation/reservation.png",
//   [NavBarLinks.Menu]: "/images/navigation/menu.png",
//   [NavBarLinks.AboutUs]: "/images/navigation/story.png",
//   [NavBarLinks.Events]: "/images/navigation/events.png",
// };

export const Navigation: React.FC<Props> = ({ className, handleClick }) => {
  const { t } = useTranslation();
  // const [activeLink, setActiveLink] = useState<NavBarLinks | null>(null);

  return (
    <nav className={classNames("nav", className)}>
      {/* <div className="container nav__container"> */}
      <ul className="nav__list">
        {Object.entries(NavBarLinks).map(([key, value]) => (
          <li className="nav__item" key={key}>
            <NavLink to={value} className={getLinkClass} onClick={handleClick}>
              {t(`nav.${key.toLowerCase()}`)}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* {activeLink && (
          <div className="nav__image-container">
            <img
              src={navLinkImages[activeLink]}
              alt={activeLink}
              className="nav__image"
            />
          </div>
        )} */}
      {/* </div> */}
    </nav>
  );
};
