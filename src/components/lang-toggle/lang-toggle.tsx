import "./lang-toggle.scss";
import { useState } from "react";
import SvgIcon from "../svg-icon";
import { useTranslation } from "react-i18next";

interface LangToggleProps{
    menuStyle?: any;
    [key: string]: any;
}
const LangToggle = ({ menuStyle,...props}:LangToggleProps) => {
  const { i18n, t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const supportedLngs = Array.isArray(i18n.options.supportedLngs)
    ? i18n.options.supportedLngs.slice(0, -1)
    : ["ar", "en", "fr"];
  return (
    <div
      {...props}
      className="lang-toggle"
      onMouseEnter={() => setOpenMenu(true)}
      onMouseLeave={() => setOpenMenu(false)}
    >
      <SvgIcon src={`/icons/${i18n.language}.svg`} />
      <div
      style={{...menuStyle}}
        className={`lang-toggle__menu ${
          openMenu ? "" : "closed"
        }`}
      >
        {supportedLngs.map((value: string, index: number) => {
          return (
            <div
              key={index}
              className={`lang-toggle__menu__item ${
                i18n.language === value ? "selected" : ""
              }`}
              onClick={() => switchLang(value)}
            >
              <SvgIcon src={`/icons/${value}.svg`} />
              {t(`langs.${value}`)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LangToggle;
