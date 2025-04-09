import "./header.scss";
import { useContext } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import { ThemeContext } from "../../ThemeContext";

const AppHeader = () => {
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t }: UseTranslationResponse = useTranslation();

  const switchLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="pro--house-header">
      <h1>{t("welcome")}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <button onClick={() => switchLang("en_US")}>EN</button>
      <button onClick={() => switchLang("fr_FR")}>FR</button>
      <button onClick={() => switchLang("ar_AR")}>AR</button>
    </div>
  );
};

export default AppHeader;
