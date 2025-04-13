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
    <div className="pro-house-header">
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Pro House</span>
        </div>
      </div>
      <div className="pro-house-header__actions-side">
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <button onClick={() => switchLang("en_US")}>EN</button>
        <button onClick={() => switchLang("fr_FR")}>FR</button>
        <button onClick={() => switchLang("ar_AR")}>AR</button>
        <div className="pro-house-header__actions-side__favorite">
          <span></span>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 0C17.538 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.36 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.934 15.604C11.815 15.048 12.61 14.495 13.354 13.903C16.335 11.533 18 8.943 18 6C18 3.64 16.463 2 14.5 2C13.424 2 12.26 2.57 11.414 3.414L10 4.828L8.586 3.414C7.74 2.57 6.576 2 5.5 2C3.56 2 2 3.656 2 6C2 8.944 3.666 11.533 6.645 13.903C7.39 14.495 8.185 15.048 9.066 15.603C9.365 15.792 9.661 15.973 10 16.175C10.339 15.973 10.635 15.792 10.934 15.604Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <button
          onClick={() => switchLang("ar_AR")}
          className="pro-house-header__actions-side__connect-wallet"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
