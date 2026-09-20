import React, { useState, useMemo } from "react";
import HouseCard from "../house-card/house-card";
import "./app-main.scss";
import { useTranslation } from "react-i18next";
import { PropertyItem } from "../../types";

interface AppContentProps {
  properties: PropertyItem[];
  onSelectProperty: (property: PropertyItem) => void;
  onToggleFavorite: (id: string) => void;
  onOpenWallet: () => void;
}

const AppContent: React.FC<AppContentProps> = ({
  properties,
  onSelectProperty,
  onToggleFavorite,
  onOpenWallet
}) => {
  const { t } = useTranslation();

  // Marketplace filter & search states
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("default");

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);

  // Filtered & sorted properties
  const filteredProperties = useMemo(() => {
    let list = properties.filter((p) => {
      const matchCat =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.platform.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "price-asc") {
      list.sort((a, b) => {
        const pA = parseFloat(a.priceValue.replace(/[^0-9.]/g, "")) || 0;
        const pB = parseFloat(b.priceValue.replace(/[^0-9.]/g, "")) || 0;
        return pA - pB;
      });
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => {
        const pA = parseFloat(a.priceValue.replace(/[^0-9.]/g, "")) || 0;
        const pB = parseFloat(b.priceValue.replace(/[^0-9.]/g, "")) || 0;
        return pB - pA;
      });
    }

    return list;
  }, [properties, selectedCategory, searchQuery, sortBy]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-content-container">
      {/* 1. HERO SECTION */}
      <section id="hero" className="app-content-container__landing-section">
        <div className="app-content-container__landing-section__content">
          <div className="hero-tag-badge">
            <span className="live-dot"></span>
            <span>{t("hero.tag")}</span>
          </div>

          <h1 className="hero-headline">{t("hero.title")}</h1>
          <p className="hero-description">{t("hero.description")}</p>

          <div className="hero-actions">
            <button
              className="app-content-container__landing-section__content__primary-button"
              onClick={() => scrollToSection("marketplace")}
            >
              {t("hero.explore-btn")}
            </button>
            <button
              className="hero-secondary-button"
              onClick={() => scrollToSection("how-it-works")}
            >
              {t("hero.whitepaper-btn")}
            </button>
          </div>
        </div>

        <div className="app-content-container__landing-section__cards-container">
          <div className="app-content-container__landing-section__cards">
            {properties.slice(0, 2).map((prop, idx) => (
              <div
                key={prop.id}
                className={`app-content-container__landing-section__cards__${
                  idx === 0 ? "first" : "second"
                }-card`}
              >
                <HouseCard
                  id={prop.id}
                  image={prop.image}
                  title={prop.title}
                  description={prop.description}
                  remainingTimeLabel={t("card.remaining-time")}
                  remainingTimeValue={prop.remainingTimeValue}
                  priceLabel={t("card.current-bid")}
                  priceValue={prop.priceValue}
                  liked={prop.liked}
                  platform={prop.platform}
                  onPlaceBid={() => onSelectProperty(prop)}
                  onToggleFavorite={() => onToggleFavorite(prop.id)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="app-content-container__landing-section__stats">
          <div className="app-content-container__landing-section__stats__box">
            <span>12k+</span>
            <span>{t("stats.properties")}</span>
          </div>
          <div className="app-content-container__landing-section__stats__box">
            <span>10k+</span>
            <span>{t("stats.auction")}</span>
          </div>
          <div className="app-content-container__landing-section__stats__box">
            <span>12k+</span>
            <span>{t("stats.developers")}</span>
          </div>
          <div className="app-content-container__landing-section__stats__box">
            <span>85k+ ETH</span>
            <span>{t("stats.volume")}</span>
          </div>
        </div>
      </section>

      {/* 2. PARTNERS & ECOSYSTEM SECTION */}
      <section className="app-content-container__partners-section">
        <div className="partners-header">
          <span className="section-eyebrow">{t("partners.title")}</span>
        </div>
        <div className="partners-grid">
          <div className="partner-card">
            <span className="partner-icon">🌐</span>
            <span className="partner-name">Decentraland</span>
            <span className="partner-token">MANA</span>
          </div>
          <div className="partner-card">
            <span className="partner-icon">📦</span>
            <span className="partner-name">The Sandbox</span>
            <span className="partner-token">SAND</span>
          </div>
          <div className="partner-card">
            <span className="partner-icon">🌌</span>
            <span className="partner-name">Somnium Space</span>
            <span className="partner-token">CUBE</span>
          </div>
          <div className="partner-card">
            <span className="partner-icon">🏙️</span>
            <span className="partner-name">Voxels</span>
            <span className="partner-token">VOXEL</span>
          </div>
          <div className="partner-card">
            <span className="partner-icon">⟠</span>
            <span className="partner-name">Ethereum</span>
            <span className="partner-token">ERC-721</span>
          </div>
          <div className="partner-card">
            <span className="partner-icon">🟣</span>
            <span className="partner-name">Polygon</span>
            <span className="partner-token">POL</span>
          </div>
        </div>
      </section>

      {/* 3. MARKETPLACE SECTION */}
      <section id="marketplace" className="marketplace-section">
        <div className="section-title-wrap">
          <span className="section-eyebrow">{t("nav-items.marketplace")}</span>
          <h2 className="section-heading">{t("marketplace.title")}</h2>
          <p className="section-subheading">{t("marketplace.subtitle")}</p>
        </div>

        {/* Filters Bar */}
        <div className="marketplace-controls">
          <div className="category-pills">
            {[
              { key: "all", label: t("marketplace.filter-all") },
              { key: "villa", label: t("marketplace.filter-villa") },
              { key: "penthouse", label: t("marketplace.filter-penthouse") },
              { key: "island", label: t("marketplace.filter-island") },
              { key: "gallery", label: t("marketplace.filter-gallery") },
            ].map((cat) => (
              <button
                key={cat.key}
                className={`category-pill ${
                  selectedCategory === cat.key ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="search-and-sort">
            <div className="search-input-wrap">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder={t("marketplace.search-placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort marketplace items"
            >
              <option value="default">{t("marketplace.sort-by")}</option>
              <option value="price-asc">{t("marketplace.sort-price-asc")}</option>
              <option value="price-desc">{t("marketplace.sort-price-desc")}</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="marketplace-empty">
            <p>{t("marketplace.no-results")}</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setSortBy("default");
              }}
              className="reset-filter-btn"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="marketplace-grid">
            {filteredProperties.map((prop) => (
              <HouseCard
                key={prop.id}
                id={prop.id}
                image={prop.image}
                title={prop.title}
                description={prop.description}
                remainingTimeLabel={t("card.remaining-time")}
                remainingTimeValue={prop.remainingTimeValue}
                priceLabel={t("card.current-bid")}
                priceValue={prop.priceValue}
                liked={prop.liked}
                platform={prop.platform}
                onPlaceBid={() => onSelectProperty(prop)}
                onToggleFavorite={() => onToggleFavorite(prop.id)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-title-wrap">
          <span className="section-eyebrow">{t("how-it-works.badge")}</span>
          <h2 className="section-heading">{t("how-it-works.title")}</h2>
          <p className="section-subheading">{t("how-it-works.subtitle")}</p>
        </div>

        <div className="how-steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">🔑</div>
            <h3>{t("how-it-works.step1-title")}</h3>
            <p>{t("how-it-works.step1-desc")}</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">🧭</div>
            <h3>{t("how-it-works.step2-title")}</h3>
            <p>{t("how-it-works.step2-desc")}</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">⚡</div>
            <h3>{t("how-it-works.step3-title")}</h3>
            <p>{t("how-it-works.step3-desc")}</p>
          </div>

          <div className="step-card">
            <div className="step-number">04</div>
            <div className="step-icon">💎</div>
            <h3>{t("how-it-works.step4-title")}</h3>
            <p>{t("how-it-works.step4-desc")}</p>
          </div>
        </div>
      </section>

      {/* 5. ABOUT US SECTION */}
      <section id="about-us" className="about-section">
        <div className="section-title-wrap">
          <span className="section-eyebrow">{t("about.badge")}</span>
          <h2 className="section-heading">{t("about.title")}</h2>
          <p className="section-subheading">{t("about.description")}</p>
        </div>

        <div className="about-features-grid">
          <div className="about-feat-card">
            <div className="feat-icon">📜</div>
            <h4>{t("about.feat1-title")}</h4>
            <p>{t("about.feat1-desc")}</p>
          </div>

          <div className="about-feat-card">
            <div className="feat-icon">🧩</div>
            <h4>{t("about.feat2-title")}</h4>
            <p>{t("about.feat2-desc")}</p>
          </div>

          <div className="about-feat-card">
            <div className="feat-icon">⚡</div>
            <h4>{t("about.feat3-title")}</h4>
            <p>{t("about.feat3-desc")}</p>
          </div>

          <div className="about-feat-card">
            <div className="feat-icon">📐</div>
            <h4>{t("about.feat4-title")}</h4>
            <p>{t("about.feat4-desc")}</p>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPERS SECTION */}
      <section id="developers" className="developers-section">
        <div className="developers-card-container">
          <div className="developers-content">
            <span className="section-eyebrow">{t("developers.badge")}</span>
            <h2 className="section-heading">{t("developers.title")}</h2>
            <p>{t("developers.subtitle")}</p>

            <div className="sdk-highlights">
              <div className="sdk-item">
                <span className="check">✓</span>
                <span>Spatial coordinate indexing & 3D bounding boxes</span>
              </div>
              <div className="sdk-item">
                <span className="check">✓</span>
                <span>Web3 automated smart escrow & ERC-721 deed verification</span>
              </div>
              <div className="sdk-item">
                <span className="check">✓</span>
                <span>Decentraland, Sandbox, & Somnium Space cross-engine bridge</span>
              </div>
            </div>

            <div className="developers-actions">
              <button
                className="dev-primary-btn"
                onClick={() =>
                  alert("ProHouse SDK v2.4 CLI & npm package documentation is ready for developer sandbox.")
                }
              >
                {t("developers.api-doc-btn")}
              </button>
              <a
                href="https://github.com/hamzarihani/pro-house"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-secondary-btn"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                ★ Star on GitHub
              </a>
              <button
                className="dev-secondary-btn"
                onClick={() =>
                  alert("Architect Grants program: Submit your 3D portfolio to grants@prohouse.meta")
                }
              >
                {t("developers.grant-btn")}
              </button>
            </div>
          </div>

          <div className="developers-terminal">
            <div className="terminal-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">bash - prohouse-sdk</span>
            </div>
            <pre className="terminal-code">
              <code>
                <span className="code-comment">{"// Install ProHouse Metaverse SDK"}</span>
                {"\n"}
                <span className="code-keyword">npm</span> install @prohouse/sdk ethers
                {"\n\n"}
                <span className="code-comment">{"// Connect to parcel smart deed"}</span>
                {"\n"}
                <span className="code-keyword">import</span> &#123; ParcelContract &#125; <span className="code-keyword">from</span> <span className="code-string">'@prohouse/sdk'</span>;
                {"\n\n"}
                <span className="code-keyword">const</span> parcel = <span className="code-keyword">await</span> ParcelContract.load(&#123;
                {"\n"}  platform: <span className="code-string">'decentraland'</span>,
                {"\n"}  coords: [-65, 182],
                {"\n"}  rpc: <span className="code-string">'https://eth-mainnet.alchemy.com/v2/demo'</span>
                {"\n"}&#125;);
                {"\n\n"}
                <span className="code-keyword">const</span> status = <span className="code-keyword">await</span> parcel.getAuctionStatus();
                {"\n"}console.log(<span className="code-string">"Highest Bid:"</span>, status.highestBid);
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="app-footer">
        <div className="app-footer__main">
          <div className="app-footer__brand">
            <div className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 29 29" fill="none">
                <path
                  d="M5.00128 8.25V18C5.00128 18.5523 5 28 5 28H11.5C11.5 28 11.4299 18.5523 11.4299 18V14H16.5727V18C16.5727 18.5523 17.0204 19 17.5727 19H22.0013C22.5536 19 23.0013 18.5523 23.0013 18V8.25C23.0013 7.93524 22.8531 7.63885 22.6013 7.45L14.0013 1L5.40128 7.45C5.14947 7.63885 5.00128 7.93524 5.00128 8.25Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
              <span>ProHouse</span>
            </div>
            <p className="footer-tagline">{t("footer.tagline")}</p>
          </div>

          <div className="app-footer__links-col">
            <h5>{t("footer.quick-links")}</h5>
            <ul>
              <li>
                <a href="#marketplace" onClick={() => scrollToSection("marketplace")}>
                  {t("nav-items.marketplace")}
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={() => scrollToSection("how-it-works")}>
                  {t("nav-items.how-it-works")}
                </a>
              </li>
              <li>
                <a href="#about-us" onClick={() => scrollToSection("about-us")}>
                  {t("nav-items.about-us")}
                </a>
              </li>
              <li>
                <a href="#developers" onClick={() => scrollToSection("developers")}>
                  {t("nav-items.developers")}
                </a>
              </li>
            </ul>
          </div>

          <div className="app-footer__links-col">
            <h5>{t("footer.platforms")}</h5>
            <ul>
              <li><span>Decentraland (MANA)</span></li>
              <li><span>The Sandbox (SAND)</span></li>
              <li><span>Somnium Space (CUBE)</span></li>
              <li><span>Voxels (VOXEL)</span></li>
            </ul>
          </div>

          <div className="app-footer__newsletter">
            <h5>{t("footer.newsletter-title")}</h5>
            <p>{t("footer.newsletter-desc")}</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="developer@metaverse.eth"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit">{t("footer.subscribe")}</button>
            </form>
            {newsletterSuccess && (
              <span className="newsletter-toast">
                {t("footer.subscribed-msg")}
              </span>
            )}
          </div>
        </div>

        <div className="app-footer__bottom">
          <span>&copy; {new Date().getFullYear()} {t("footer.rights")}</span>
          <div className="social-links">
            <span className="social-link" title="Discord">Discord</span>
            <span className="social-link" title="X / Twitter">Twitter / X</span>
            <span className="social-link" title="Telegram">Telegram</span>
            <a
              href="https://github.com/hamzarihani/pro-house"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Star ProHouse on GitHub"
              style={{ textDecoration: 'none', color: '#f59e0b', fontWeight: 'bold' }}
            >
              ★ Star on GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppContent;
