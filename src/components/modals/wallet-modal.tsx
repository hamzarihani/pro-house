import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WalletState } from '../../types';
import './wallet-modal.scss';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallet: WalletState;
  onConnect: (providerName: string) => void;
  onDisconnect: () => void;
}

const WALLET_PROVIDERS = [
  {
    name: 'MetaMask',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M29.5 7.5L18.8 15.3L20.8 10.3L29.5 7.5Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5"/>
        <path d="M2.5 7.5L11.1 10.4L13.2 15.3L2.5 7.5Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5"/>
        <path d="M25.1 22.3L22.3 26.6L28.8 28.4L30.6 22.4L25.1 22.3Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5"/>
        <path d="M1.4 22.4L3.2 28.4L9.7 26.6L6.9 22.3L1.4 22.4Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5"/>
        <path d="M9.4 14.1L7.5 17L13.9 17.3L13.7 10.5L9.4 14.1Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5"/>
        <path d="M22.6 14.1L18.2 10.4L18.1 17.3L24.5 17L22.6 14.1Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5"/>
        <path d="M9.7 26.6L13.5 24.8L10.2 20.3L6.9 22.3L9.7 26.6Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5"/>
        <path d="M22.3 26.6L25.1 22.3L21.8 20.3L18.5 24.8L22.3 26.6Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5"/>
        <path d="M18.5 24.8L21.8 20.3L22.8 16.9L18.1 17.3L18.5 24.8Z" fill="#D7C1B3"/>
        <path d="M9.2 16.9L10.2 20.3L13.5 24.8L13.9 17.3L9.2 16.9Z" fill="#D7C1B3"/>
        <path d="M13.5 24.8L16 28.2L18.5 24.8L13.5 24.8Z" fill="#F6851B"/>
      </svg>
    ),
    badge: 'Popular'
  },
  {
    name: 'Coinbase Wallet',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#0052FF"/>
        <path d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM13.8 18.2C13.2 18.2 12.8 17.8 12.8 17.2V14.8C12.8 14.2 13.2 13.8 13.8 13.8H18.2C18.8 13.8 19.2 14.2 19.2 14.8V17.2C19.2 17.8 18.8 18.2 18.2 18.2H13.8Z" fill="white"/>
      </svg>
    ),
    badge: 'Web3'
  },
  {
    name: 'WalletConnect',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#3B99FC"/>
        <path d="M10.5 12.5C13.5 9.5 18.5 9.5 21.5 12.5L22 13C22.3 13.3 22.3 13.7 22 14L20.8 15.2C20.6 15.4 20.4 15.4 20.2 15.2L19.5 14.5C17.5 12.5 14.5 12.5 12.5 14.5L11.8 15.2C11.6 15.4 11.4 15.4 11.2 15.2L10 14C9.7 13.7 9.7 13.3 10 13L10.5 12.5ZM24.5 15.5L25.8 16.8C26.1 17.1 26.1 17.5 25.8 17.8L20.5 23.1C20.2 23.4 19.8 23.4 19.5 23.1L16 19.6L12.5 23.1C12.2 23.4 11.8 23.4 11.5 23.1L6.2 17.8C5.9 17.5 5.9 17.1 6.2 16.8L7.5 15.5C7.8 15.2 8.2 15.2 8.5 15.5L12 19L15.5 15.5C15.8 15.2 16.2 15.2 16.5 15.5L20 19L23.5 15.5C23.8 15.2 24.2 15.2 24.5 15.5Z" fill="white"/>
      </svg>
    ),
    badge: 'Mobile'
  },
  {
    name: 'Phantom',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#AB9FF2"/>
        <path d="M23.5 16.5C23.5 20.6 20.1 24 16 24C11.9 24 8.5 20.6 8.5 16.5C8.5 12.4 11.9 9 16 9C20.1 9 23.5 12.4 23.5 16.5Z" fill="#534BAE"/>
        <circle cx="13.5" cy="15.5" r="1.5" fill="white"/>
        <circle cx="18.5" cy="15.5" r="1.5" fill="white"/>
      </svg>
    ),
    badge: 'Solana/EVM'
  }
];

export const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
  wallet,
  onConnect,
  onDisconnect
}) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div
        className="wallet-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="wallet-modal-dialog__header">
          <div className="wallet-modal-dialog__header__title-group">
            <h3>{wallet.isConnected ? t('wallet-connected') : t('modal.wallet-title')}</h3>
            <p>{wallet.isConnected ? wallet.network : t('modal.wallet-subtitle')}</p>
          </div>
          <button className="wallet-modal-dialog__close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="wallet-modal-dialog__content">
          {wallet.isConnected ? (
            <div className="wallet-connected-view">
              <div className="wallet-card-summary">
                <div className="wallet-card-summary__provider">
                  <span className="wallet-status-dot"></span>
                  <span>{wallet.providerName}</span>
                </div>
                <div className="wallet-card-summary__address">
                  <span>{wallet.address}</span>
                  <button
                    className={`copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                  >
                    {copied ? t('address-copied') : t('copy-address')}
                  </button>
                </div>
                <div className="wallet-card-summary__stats">
                  <div className="stat-pill">
                    <span className="stat-label">{t('balance')}</span>
                    <span className="stat-val">{wallet.balance}</span>
                  </div>
                  <div className="stat-pill">
                    <span className="stat-label">{t('network')}</span>
                    <span className="stat-val">{wallet.network}</span>
                  </div>
                </div>
              </div>

              <div className="wallet-actions">
                <button
                  className="disconnect-btn"
                  onClick={() => {
                    onDisconnect();
                    onClose();
                  }}
                >
                  {t('disconnect')}
                </button>
              </div>
            </div>
          ) : (
            <div className="wallet-providers-list">
              {WALLET_PROVIDERS.map((provider) => (
                <div
                  key={provider.name}
                  className="wallet-provider-card"
                  onClick={() => {
                    onConnect(provider.name);
                    onClose();
                  }}
                >
                  <div className="wallet-provider-card__info">
                    <div className="wallet-icon-wrapper">{provider.icon}</div>
                    <span className="wallet-name">{provider.name}</span>
                  </div>
                  <span className="wallet-badge">{provider.badge}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
