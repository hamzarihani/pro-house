import "./header.scss";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import SvgIcon from "../svg-icon";
import LangToggle from "../lang-toggle/lang-toggle";
import { WalletState } from "../../types";

interface AppHeaderProps {
  wallet: WalletState;
  onOpenWallet: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onNavigate: (sectionId: string) => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  wallet,
  onOpenWallet,
  favoritesCount,
  onOpenFavorites,
  onNavigate
}) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    {
      id: "marketplace",
      label: "nav-items.marketplace",
      pos: "start",
    },
    {
      id: "how-it-works",
      label: "nav-items.how-it-works",
      pos: "center",
    },
    {
      id: "about-us",
      label: "nav-items.about-us",
      pos: "center",
    },
    {
      id: "developers",
      label: "nav-items.developers",
      pos: "end",
    },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setOpenMenu(false);
  };

  return (
    <header className="pro-house-header">
      <div
        className={`pro-house-header__burger-button ${openMenu ? "open" : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Toggle navigation menu"
      >
        <SvgIcon src="/icons/burger-line.svg" />
        <SvgIcon src="/icons/burger-line.svg" />
        <SvgIcon src="/icons/burger-line.svg" />
      </div>

      <div className="pro-house-header__menu-side">
        <div
          className="pro-house-header__logo"
          onClick={() => handleLinkClick("hero")}
          role="button"
          tabIndex={0}
        >
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
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>ProHouse</span>
        </div>

        <nav className="pro-house-header__menu-side__links">
          {links.map((item) => (
            <div
              key={item.id}
              className={`pro-house-header__menu-side__links__item ${item.pos}`}
              onClick={() => handleLinkClick(item.id)}
            >
              {t(item.label)}
            </div>
          ))}
        </nav>
      </div>

      <div className="pro-house-header__actions-side">
        <a
          href="https://github.com/hamzarihani/pro-house"
          target="_blank"
          rel="noopener noreferrer"
          className="pro-house-header__actions-side__github"
          title="Star on GitHub"
          aria-label="GitHub repository"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <span className="github-star-text">★ Star</span>
        </a>

        <div
          className="pro-house-header__actions-side__favorite"
          onClick={onOpenFavorites}
          title="Saved Estates"
          role="button"
          tabIndex={0}
        >
          {favoritesCount > 0 && (
            <span className="fav-count-badge">{favoritesCount}</span>
          )}
          <SvgIcon src="/icons/hearth.svg" />
        </div>

        <button
          onClick={onOpenWallet}
          className={`pro-house-header__actions-side__connect-wallet ${
            wallet.isConnected ? "connected" : ""
          }`}
        >
          {wallet.isConnected ? (
            <span className="wallet-pill-content">
              <span className="wallet-dot"></span>
              <span>{wallet.address}</span>
            </span>
          ) : (
            t("connect-wallet")
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`pro-house-header__mobile-menu ${openMenu ? "open" : ""}`}
      >
        <div className="pro-house-header__mobile-menu__content">
          {links.map((item) => (
            <div
              key={item.id}
              className="pro-house-header__mobile-menu__content__item"
              onClick={() => handleLinkClick(item.id)}
            >
              {t(item.label)}
            </div>
          ))}

          <div
            className="pro-house-header__mobile-menu__content__item favorite-item"
            onClick={() => {
              onOpenFavorites();
              setOpenMenu(false);
            }}
          >
            <span>{t("modal.favorites-title")}</span>
            {favoritesCount > 0 && (
              <span className="fav-badge-num">{favoritesCount}</span>
            )}
          </div>

          <a
            href="https://github.com/hamzarihani/pro-house"
            target="_blank"
            rel="noopener noreferrer"
            className="pro-house-header__mobile-menu__content__item"
            style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            onClick={() => setOpenMenu(false)}
          >
            <span>GitHub (Star ⭐)</span>
            <span style={{ fontSize: '11px', background: 'var(--badge-background)', color: 'var(--primary-color)', padding: '2px 8px', borderRadius: '10px' }}>★</span>
          </a>

          <button
            onClick={() => {
              onOpenWallet();
              setOpenMenu(false);
            }}
            className={`pro-house-header__actions-side__connect-wallet mobile ${
              wallet.isConnected ? "connected" : ""
            }`}
          >
            {wallet.isConnected ? (
              <span className="wallet-pill-content">
                <span className="wallet-dot"></span>
                <span>{wallet.address}</span>
              </span>
            ) : (
              t("connect-wallet")
            )}
          </button>
        </div>

        <div className="pro-house-header__mobile-menu__footer">
          <LangToggle
            style={{ position: "relative" }}
            menuStyle={{ bottom: "0px", top: "unset", left: "30px" }}
          />
          <div
            onClick={toggleTheme}
            className="pro-house-header__mobile-menu__footer__theme-button"
            title="Toggle theme"
          >
            {theme === "light" ? (
              <SvgIcon src="/icons/crescent.svg" />
            ) : (
              <SvgIcon src="/icons/light.svg" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
