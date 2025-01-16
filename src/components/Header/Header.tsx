import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import CustomSelect from "../CustomSelect";
import { MenuButton } from "../MenuButton";
import "./Header.scss";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../app/features/auth/authSlice";
import { Path } from "../../types/Path";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

export const Header = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"ua" | "en">("en");
  const { isAuthenticated } = useAppSelector(selectAuth);
  const { t } = useTranslation();

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleChangeLanguage(value: "ua" | "en") {
    setLang(value);
    i18n.changeLanguage(value);
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          {/* <div className="header__left"> */}
          {/* <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}
          <Logo />
          <Navigation
            className={isMenuOpen ? "open" : ""}
            handleClick={closeMobileMenu}
          />
          {/* </div> */}

          <div className="header__right gap-6">
            <CustomSelect
              value={lang}
              options={["ua", "en"]}
              onChange={handleChangeLanguage}
            />

            {isAuthenticated ? (
              <Link to={Path.Account}>
                <UserCircleIcon className="h-6 w-6" />
              </Link>
            ) : (
              <Link to={Path.Login} className="header__login">
                {t("nav.login")}
              </Link>
            )}

            <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </header>
      {/* <aside>
        <Navigation
          className={isMenuOpen ? "open" : ""}
          handleClick={closeMobileMenu}
        />
      </aside> */}
    </>
  );
};
