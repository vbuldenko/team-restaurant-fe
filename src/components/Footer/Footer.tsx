import { ArrowUpIcon } from "@heroicons/react/24/outline";
import "./Footer.scss";
import { Logo } from "../Logo";
import { NavBarLinks } from "../../types/NavBarLinks";
import { scrollToTop } from "../../utils";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <Logo className="footer__logo" />

        <ul className="nav__list footer__list">
          {Object.entries(NavBarLinks).map(([key, value]) => (
            <li className="nav__item" key={key}>
              <a href={value} className="nav__link">
                {key}
              </a>
            </li>
          ))}
        </ul>

        <button className="footer__button" onClick={scrollToTop}>
          Back to top
          <span className="footer__button-icon icon ">
            <ArrowUpIcon className="h-6 w-6" />
          </span>
        </button>
      </div>
    </footer>
  );
};
