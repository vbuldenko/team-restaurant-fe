import { ArrowUpIcon } from "@heroicons/react/24/outline";
import "./Footer.scss";
import { Logo } from "../Logo";
import { NavBarLinks } from "../../types/NavBarLinks";
import { getLinkClass, scrollToTop } from "../../utils";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div>
          <Logo className="footer__logo" />
          <p>{t("contacts.working_title")}</p>
          <p>{t("contacts.working_hours")}</p>
        </div>

        <nav>
          <h2 className="footer__nav-title">{t("gen.info")}</h2>
          <ul className="footer__nav-list">
            {Object.entries(NavBarLinks).map(([key, value]) => (
              <li className="footer__nav-item" key={key}>
                <NavLink to={value} className={getLinkClass}>
                  {t(`nav.${key.toLowerCase()}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="footer__nav-title">{t("contacts.title")}</h2>
            <p>{t("contacts.address")}</p>
            <p>{t("contacts.phone")}</p>
            <p>{t("contacts.email")}</p>
          </div>

          <div>
            <h2 className="footer__nav-title">{t("contacts.followus")}</h2>
            <div className="footer__socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={"icons/fb.svg"}
                  alt="Facebook"
                  className="footer__social-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={"icons/insta.svg"}
                  alt="Instagram"
                  className="footer__social-icon"
                />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={"icons/x.svg"}
                  alt="Twitter"
                  className="footer__social-icon"
                />
              </a>
            </div>
          </div>
        </div>

        <button className="footer__button" onClick={scrollToTop}>
          {/* Back to top */}
          <span className="footer__button-icon icon ">
            <ArrowUpIcon className="h-6 w-6" />
          </span>
        </button>
      </div>
    </footer>
  );
};
