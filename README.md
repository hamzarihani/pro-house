# 🏛️ ProHouse — Next-Gen Metaverse Real Estate Platform

<p align="center">
  <img src="public/assets/penthouse.jpg" alt="ProHouse Metaverse Real Estate" width="100%" style="border-radius: 12px; max-height: 420px; object-fit: cover;" />
</p>

<p align="center">
  <strong>The premier Web3 gateway to high-yield virtual real estate, architectural metaverse assets, and decentralized land auctions.</strong>
</p>

<p align="center">
  <a href="https://github.com/hamzarihani/pro-house/stargazers"><img src="https://img.shields.io/github/stars/hamzarihani/pro-house?style=for-the-badge&logo=github&color=356df6" alt="GitHub Stars" /></a>
  <a href="https://github.com/hamzarihani/pro-house/network/members"><img src="https://img.shields.io/github/forks/hamzarihani/pro-house?style=for-the-badge&logo=github&color=356df6" alt="GitHub Forks" /></a>
  <a href="https://github.com/hamzarihani/pro-house/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-4.9-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Sass-SCSS-CC6699?style=for-the-badge&logo=sass" alt="SASS" />
</p>

---

## ⭐ Support the Project

> **If you like this project or find it useful, please consider giving it a Star ⭐ on [GitHub](https://github.com/hamzarihani/pro-house)!**
> 
> Starring the repository helps increase visibility, motivates further feature development, and supports open-source Web3 builders.
> 
> 👉 **[Click here to Star the repository on GitHub!](https://github.com/hamzarihani/pro-house)**

---

## 📖 About ProHouse

**ProHouse** is a futuristic, decentralized virtual real estate marketplace designed for the metaverse frontier. It allows investors, virtual architects, and digital creators to discover, bid on, monetize, and trade verified virtual properties across top metaverse protocols including **Decentraland**, **The Sandbox**, **Somnium Space**, and **Voxels**.

Every estate deed is represented as an on-chain smart contract asset (ERC-721), providing immutable ownership proof, automated royalty distribution, and instant 24/7 global liquidity without intermediaries.

---

## ✨ Key Features

- **🌐 Tri-Lingual & Native RTL Support**:
  - Full translations for **English**, **French**, and **Arabic**.
  - Dynamic Right-to-Left (RTL) mirroring for Arabic, including inverted drawer animations and typography adjustments.
- **🌓 Dynamic Dark & Light Modes**:
  - Custom CSS tokenized design system with instant switching and persistent preferences.
- **🦊 Web3 Wallet Integration (Simulated)**:
  - Connect with **MetaMask**, **Coinbase Wallet**, **WalletConnect**, or **Phantom**.
  - Displays connected address pill, network status indicator, balance (ETH), and disconnect flow.
- **🏷️ Real-Time Marketplace Catalog**:
  - **Category Filters**: All Estates, Cyber Villas, Sky Penthouses, Floating Islands, and Art Pavilions.
  - **Live Search**: Instant keyword search by title, architect, or virtual world.
  - **Sorting Options**: Sort by Price (Low to High, High to Low) or Ending Soon.
- **🔨 Property Details & Live Bidding Engine**:
  - Inspect 3D spatial coordinates (e.g. `[X: -65, Y: 182]`), virtual world platform, and current highest bidder.
  - Quick-increment bid buttons (`+0.5 ETH`, `+1.0 ETH`, `+5.0 ETH`).
  - Real-time bid submission with validation, error handling, and live bid history logging.
- **❤️ Interactive Saved Estates (Favorites Drawer)**:
  - Heart icon badge in header tracks saved properties count in real time.
  - Off-canvas sliding drawer to manage bookmarks with quick-bid actions.
- **🤝 Multi-Metaverse Protocol Ecosystem**:
  - Verified parcel support for Decentraland (MANA), The Sandbox (SAND), Somnium Space (CUBE), Voxels (VOXEL), Ethereum, and Polygon.
- **💻 Developers & Builders Hub**:
  - Interactive TypeScript `@prohouse/sdk` terminal demonstration.
  - Quick action links for SDK documentation, architect grants, and GitHub repository.
- **📱 Fully Responsive Design**:
  - Seamless layout and touch drawer navigation on Mobile, Tablet, Laptop, and 4K Displays.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.js.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | SASS / SCSS (Custom Tokenized Theme Variables) |
| **Localization (i18n)** | [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) |
| **Icons & Media** | Inline SVG Icons & High-Resolution AI Architectural Renders |
| **Containerization** | Docker & Docker Compose |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hamzarihani/pro-house.git
   cd pro-house
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port indicated in terminal) in your browser.

4. **Run automated test suite**:
   ```bash
   npm test -- --watchAll=false
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🐳 Docker Deployment

You can also run ProHouse using Docker:

```bash
# Build and run with Docker Compose
docker-compose up --build
```
Then navigate to [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```text
pro-house/
├── public/
│   ├── assets/              # Generated high-resolution metaverse estate renders
│   ├── icons/               # SVG flags, theme crescents, hearts, and logos
│   └── index.html           # HTML entry point
├── src/
│   ├── components/
│   │   ├── app-main/        # Hero, Partners, Marketplace, How It Works, About, Developers, Footer
│   │   ├── header/          # Navigation, Logo, GitHub Star button, Wallet pill, Favorites badge
│   │   ├── house-card/      # Interactive estate cards with platform tags & bid triggers
│   │   ├── lang-toggle/     # Multilingual dropdown (EN, FR, AR)
│   │   ├── modals/          # WalletModal, PropertyModal (live bidding), FavoritesDrawer
│   │   ├── right-toolbar/   # Floating theme toggle and language switcher
│   │   └── svg-icon.tsx     # Reusable SVG loader
│   ├── data/
│   │   └── properties.ts    # Initial metaverse estate dataset
│   ├── locales/             # Translations: local-en_US.json, local-fr_FR.json, local-ar_AR.json
│   ├── fonts/               # RF Dewi Extended typography
│   ├── App.tsx              # Root app component with Web3 state & modal handlers
│   ├── ThemeContext.tsx     # Dark / Light theme provider
│   ├── themes.scss          # CSS theme variables for surfaces, cards, modals, and shadows
│   └── types.ts             # TypeScript interfaces for properties, bids, and wallet
├── Dockerfile
├── docker-compose.yml
└── package.json
```

---

## 🌟 How to Support

If you enjoy this project:
1. ⭐ **Star the repo** on [GitHub](https://github.com/hamzarihani/pro-house)
2. 🍴 **Fork it** and contribute improvements or new metaverse features
3. 📢 **Share** it with fellow Web3 and metaverse enthusiasts!

---

## 👤 Author

**Hamza Rihani**
- GitHub: [@hamzarihani](https://github.com/hamzarihani)
- Repository: [https://github.com/hamzarihani/pro-house](https://github.com/hamzarihani/pro-house)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
