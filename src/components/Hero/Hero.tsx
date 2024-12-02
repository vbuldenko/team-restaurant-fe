import { useTranslation } from "react-i18next";
import "./Hero.scss";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="hero__content">
        {/* <div className="hero__text">
          <span>{t("home.hero_titles.main")}</span>
          <span>{t("home.hero_titles.secondary")}</span>
          <span>{t("home.hero_titles.description")}</span>
        </div> */}
        <div className="hero__text">
          <span>{t("home.hero_titles.main")}</span>
          <span>
            {t("home.hero_titles.secondary")}{" "}
            {t("home.hero_titles.description")}
          </span>
        </div>
        <div className="hero__button">{t("home.hero_button")}</div>
      </div>
    </div>
  );
};
