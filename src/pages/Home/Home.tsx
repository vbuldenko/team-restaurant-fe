import { useTranslation } from "react-i18next";
import { Hero } from "../../components/Hero";
import InfoSection from "../../components/InfoSection";
import { NavBarLinks } from "../../types/NavBarLinks";

export default function HomePage() {
  const { t } = useTranslation();

  // const values = t("home.values", { returnObjects: true }) as InfoItem[];
  // const rules = t("home.rules", { returnObjects: true }) as InfoItem[];

  return (
    <>
      <Hero />
      <InfoSection
        title={t("home.about.title")}
        description={t("home.about.description")}
        button={{ text: t("home.about.button"), link: NavBarLinks.OurStory }}
        images={["/navigation/home.png"]}
      />
      <InfoSection
        title={t("home.cuisine.title")}
        subtitle={t("home.cuisine.subtitle")}
        description={t("home.cuisine.description")}
        button={{ text: t("home.cuisine.button"), link: NavBarLinks.Menu }}
        images={["dish2.jpg"]}
        reverse={true}
        dark={true}
      />
      <InfoSection
        title={t("home.bar.title")}
        subtitle={t("home.bar.subtitle")}
        description={t("home.bar.description")}
        button={{ text: t("home.bar.button"), link: NavBarLinks.Menu }}
        images={["glass.jpg"]}
        // reverse={true}
        // imgAbsolute={true}
      />
      <InfoSection
        title={t("home.events.title")}
        subtitle={t("home.events.subtitle")}
        description={t("home.events.description")}
        button={{ text: t("home.events.button"), link: NavBarLinks.Events }}
        images={["events.jpg"]}
        reverse={true}
        dark={true}
      />
    </>
  );
}
