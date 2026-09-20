import './App.scss';
import React, { useEffect, useState } from 'react';
import AppHeader from './components/header/header';
import { useTranslation } from 'react-i18next';
import RightToolbar from './components/right-toolbar/right-toolbar';
import AppContent from './components/app-main/app-main';
import { WalletModal } from './components/modals/wallet-modal';
import { PropertyModal } from './components/modals/property-modal';
import { FavoritesDrawer } from './components/modals/favorites-drawer';
import { INITIAL_PROPERTIES } from './data/properties';
import { PropertyItem, WalletState } from './types';

function App() {
  const { i18n } = useTranslation();

  // RTL synchronization with language selection
  useEffect(() => {
    const isArabic = i18n.language && i18n.language.startsWith('ar');
    const dir = isArabic ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', dir);
  }, [i18n.language]);

  // Properties state
  const [properties, setProperties] = useState<PropertyItem[]>(INITIAL_PROPERTIES);

  // Web3 Wallet state
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: '',
    balance: '0.00 ETH',
    network: 'Ethereum Mainnet',
    providerName: '',
  });

  // Modal visibility states
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [favoritesDrawerOpen, setFavoritesDrawerOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);

  // Favorite toggling
  const handleToggleFavorite = (propId: string) => {
    setProperties((prev) =>
      prev.map((item) =>
        item.id === propId ? { ...item, liked: !item.liked } : item
      )
    );
  };

  // Clear all favorites
  const handleClearAllFavorites = () => {
    setProperties((prev) =>
      prev.map((item) => ({ ...item, liked: false }))
    );
  };

  // Web3 Wallet connection handlers
  const handleConnectWallet = (providerName: string) => {
    setWallet({
      isConnected: true,
      address: '0x71C84...F319',
      balance: '14.82 ETH',
      network: 'Ethereum Mainnet',
      providerName: providerName || 'MetaMask',
    });
  };

  const handleDisconnectWallet = () => {
    setWallet({
      isConnected: false,
      address: '',
      balance: '0.00 ETH',
      network: 'Ethereum Mainnet',
      providerName: '',
    });
  };

  // Placing an on-chain simulated bid
  const handlePlaceBid = (propertyId: string, amountEth: number) => {
    const formattedAmount = `${amountEth.toFixed(2)} ETH`;
    const bidderId = wallet.isConnected ? wallet.address : '0x71C84...F319';

    setProperties((prev) =>
      prev.map((item) => {
        if (item.id === propertyId) {
          const updatedItem: PropertyItem = {
            ...item,
            priceValue: formattedAmount,
            highestBidder: bidderId,
            bidsCount: item.bidsCount + 1,
            bidHistory: [
              { bidder: bidderId, amount: formattedAmount, time: 'Just now' },
              ...item.bidHistory,
            ],
          };
          // Also update currently viewed modal if open
          if (selectedProperty && selectedProperty.id === propertyId) {
            setSelectedProperty(updatedItem);
          }
          return updatedItem;
        }
        return item;
      })
    );
  };

  // Smooth navigation helper
  const handleNavigate = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const favoriteProperties = properties.filter((p) => p.liked);

  return (
    <div className="pro-house-app">
      <RightToolbar />
      <AppHeader
        wallet={wallet}
        onOpenWallet={() => setWalletModalOpen(true)}
        favoritesCount={favoriteProperties.length}
        onOpenFavorites={() => setFavoritesDrawerOpen(true)}
        onNavigate={handleNavigate}
      />
      <AppContent
        properties={properties}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onToggleFavorite={handleToggleFavorite}
        onOpenWallet={() => setWalletModalOpen(true)}
      />

      {/* Wallet Modal */}
      <WalletModal
        isOpen={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
        wallet={wallet}
        onConnect={handleConnectWallet}
        onDisconnect={handleDisconnectWallet}
      />

      {/* Property Details & Live Bidding Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
        wallet={wallet}
        onOpenWalletModal={() => setWalletModalOpen(true)}
        onPlaceBid={handlePlaceBid}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={selectedProperty ? !!selectedProperty.liked : false}
      />

      {/* Favorites Off-Canvas Drawer */}
      <FavoritesDrawer
        isOpen={favoritesDrawerOpen}
        onClose={() => setFavoritesDrawerOpen(false)}
        favorites={favoriteProperties}
        onRemoveFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onClearAll={handleClearAllFavorites}
      />
    </div>
  );
}

export default App;
