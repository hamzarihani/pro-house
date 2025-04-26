import "./header.scss";
import { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import SvgIcon from "../svg-icon";

const AppHeader = () => {
  const { i18n, t } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const links = [
    {
      label: "nav-items.marketplace",
      onClick: () => {},
    },
    {
      label: "nav-items.about-us",
      onClick: () => {},
    },
    {
      label: "nav-items.developers",
      onClick: () => {},
    },
  ];
  return (
    <div className="pro-house-header">
      <div
        className={`pro-house-header__burger-button ${openMenu ? "open" : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <SvgIcon src={`/icons/burger-line.svg`} />
        <SvgIcon src={`/icons/burger-line.svg`} />
        <SvgIcon src={`/icons/burger-line.svg`} />
      </div>
      <div className="pro-house-header__menu-side">
        <div className="pro-house-header__logo">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00128 8.25V18C5.00128 18.5523 5 28 5 28H11.5C11.5 28 11.4299 18.5523 11.4299 18V14H16.5727V18C16.5727 18.5523 17.0204 19 17.5727 19H22.0013C22.5536 19 23.0013 18.5523 23.0013 18V8.25C23.0013 7.93524 22.8531 7.63885 22.6013 7.45L14.0013 1L5.40128 7.45C5.14947 7.63885 5.00128 7.93524 5.00128 8.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>ProHouse</span>
        </div>
        <div className="pro-house-header__menu-side__links">
          {links.map((item, idx) => {
            return (
              <div
                key={idx}
                className="pro-house-header__menu-side__links__item"
              >
                {t(item.label)}
              </div>
            );
          })}
        </div>
      </div>
      <div className="pro-house-header__actions-side">
        <div className="pro-house-header__actions-side__favorite">
          <span></span>
          <SvgIcon src="/icons/hearth.svg" />
        </div>
        <button
          onClick={() => {}}
          className="pro-house-header__actions-side__connect-wallet"
        >
          {t("connect-wallet")}
        </button>
      </div>
      <div
        className={`pro-house-header__mobile-menu ${openMenu ? "open" : ""}`}
      >
        <div className="pro-house-header__mobile-menu__content">
          {links.map((item, idx) => {
            return (
              <div
                key={idx}
                className="pro-house-header__mobile-menu__content__item"
              >
                {t(item.label)}
              </div>
            );
          })}
        </div>
        <div className="pro-house-header__mobile-menu__footer">
          <button
            onClick={() => switchLang("fr")}
            style={{ display: "flex" }}
            className="pro-house-header__actions-side__connect-wallet"
          >
            {t("connect-wallet")}
          </button>
          <div
            onClick={toggleTheme}
            className="pro-house-header__mobile-menu__footer__theme-button"
          >
            {theme === "light" ? (
              <SvgIcon src="/icons/crescent.svg" />
            ) : (
              <SvgIcon src="/icons/light.svg" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
