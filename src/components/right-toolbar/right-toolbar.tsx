import "./rigth-toolbar.scss";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../ThemeContext";
import SvgIcon from "../svg-icon";

const RightToolbar = () => {
  const { i18n, t } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const supportedLngs = Array.isArray(i18n.options.supportedLngs)
    ? i18n.options.supportedLngs.slice(0, -1)
    : ["ar", "en", "fr"];
  return (
    <div className="right-toolbar">
      <div onClick={toggleTheme} className="right-toolbar__theme-button">
        {theme === "light" ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18C6.5 18 4.375 17.125 2.625 15.375C0.875 13.625 0 11.5 0 9C0 6.5 0.875 4.375 2.625 2.625C4.375 0.875 6.5 0 9 0C9.23333 0 9.46267 0.00833343 9.688 0.0250001C9.91333 0.0416668 10.134 0.0666666 10.35 0.0999999C9.66667 0.583333 9.12067 1.21267 8.712 1.988C8.30333 2.76333 8.09933 3.60067 8.1 4.5C8.1 6 8.625 7.275 9.675 8.325C10.725 9.375 12 9.9 13.5 9.9C14.4167 9.9 15.2583 9.69567 16.025 9.287C16.7917 8.87833 17.4167 8.33267 17.9 7.65C17.9333 7.86667 17.9583 8.08733 17.975 8.312C17.9917 8.53667 18 8.766 18 9C18 11.5 17.125 13.625 15.375 15.375C13.625 17.125 11.5 18 9 18ZM9 16C10.4667 16 11.7833 15.5957 12.95 14.787C14.1167 13.9783 14.9667 12.9243 15.5 11.625C15.1667 11.7083 14.8333 11.775 14.5 11.825C14.1667 11.875 13.8333 11.9 13.5 11.9C11.45 11.9 9.704 11.179 8.262 9.737C6.82 8.295 6.09933 6.54933 6.1 4.5C6.1 4.16667 6.125 3.83333 6.175 3.5C6.225 3.16667 6.29167 2.83333 6.375 2.5C5.075 3.03333 4.02067 3.88333 3.212 5.05C2.40333 6.21667 1.99933 7.53333 2 9C2 10.9333 2.68333 12.5833 4.05 13.95C5.41667 15.3167 7.06667 16 9 16Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M18 10H19M1 10H2M10 18V19M10 1V2M15.657 15.657L16.364 16.364M3.636 3.636L4.343 4.343M4.343 15.657L3.636 16.364M16.364 3.636L15.657 4.343"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div
        className="right-toolbar__lang-toggle"
        onMouseEnter={() => setOpenMenu(true)}
        onMouseLeave={() => setOpenMenu(false)}
      >
        <SvgIcon src={`/icons/${i18n.language}.svg`} />
        <div
          className={`right-toolbar__lang-toggle__menu ${
            openMenu ? "" : "closed"
          }`}
        >
          {supportedLngs.map((value: string, index: number) => {
            return (
              <div
                key={index}
                className={`right-toolbar__lang-toggle__menu__item ${
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
    </div>
  );
};
export default RightToolbar;
