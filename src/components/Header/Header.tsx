import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import CustomSelect from "../CustomSelect";
import { MenuButton } from "../MenuButton";
import "./Header.scss";

export const Header = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"ua" | "en">("ua");

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
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Logo />

        <div className="header__right gap-4">
          <CustomSelect
            value={lang}
            options={["ua", "en"]}
            onChange={handleChangeLanguage}
          />
        </div>
      </header>
      <aside>
        <Navigation
          className={isMenuOpen ? "mobile" : ""}
          handleClick={closeMobileMenu}
        />
      </aside>
    </>
  );
};
