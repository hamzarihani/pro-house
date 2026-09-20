import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PropertyItem, WalletState } from '../../types';
import './property-modal.scss';

interface PropertyModalProps {
  property: PropertyItem | null;
  isOpen: boolean;
  onClose: () => void;
  wallet: WalletState;
  onOpenWalletModal: () => void;
  onPlaceBid: (propertyId: string, amountEth: number) => void;
  onToggleFavorite: (propertyId: string) => void;
  isFavorite: boolean;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  isOpen,
  onClose,
  wallet,
  onOpenWalletModal,
  onPlaceBid,
  onToggleFavorite,
  isFavorite
}) => {
  const { t } = useTranslation();
  const [customBid, setCustomBid] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');

  if (!isOpen || !property) return null;

  const currentPriceNum = parseFloat(property.priceValue.replace(/[^0-9.]/g, '')) || 0;

  const handleQuickAdd = (addAmount: number) => {
    const base = customBid ? parseFloat(customBid) : currentPriceNum;
    const nextVal = (base + addAmount).toFixed(2);
    setCustomBid(nextVal);
    setErrorMsg('');
  };

  const handleSubmitBid = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet.isConnected) {
      setErrorMsg(t('modal.wallet-needed'));
      return;
    }

    const bidVal = parseFloat(customBid);
    if (isNaN(bidVal) || bidVal <= currentPriceNum) {
      setErrorMsg(`${t('modal.min-bid-warning')} (> ${property.priceValue})`);
      return;
    }

    onPlaceBid(property.id, bidVal);
    setSuccessMsg(t('modal.bid-success'));
    setErrorMsg('');
    setTimeout(() => {
      setSuccessMsg('');
    }, 3500);
  };

  return (
    <div className="property-modal-overlay" onClick={onClose}>
      <div
        className="property-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="property-modal-dialog__close" onClick={onClose}>
          &times;
        </button>

        <div className="property-modal-grid">
          {/* Left Column: Image & Badges */}
          <div className="property-modal-media">
            <div
              className="property-modal-media__img"
              style={{ backgroundImage: `url("${property.image}")` }}
            >
              <div className="property-modal-media__badges">
                <span className="platform-tag">{property.platform}</span>
                <span className="coords-tag">{property.coordinates}</span>
              </div>
              <button
                className={`fav-btn ${isFavorite ? 'active' : ''}`}
                onClick={() => onToggleFavorite(property.id)}
                aria-label="Toggle favorite"
              >
                <svg width="20" height="20" viewBox="0 0 18 16" fill="none">
                  <path
                    d="M12.7498 0.5C15.2815 0.5 17.3332 2.58333 17.3332 5.5C17.3332 11.3333 11.0832 14.6667 8.99984 15.9167C6.9165 14.6667 0.666504 11.3333 0.666504 5.5C0.666504 2.58333 2.74984 0.5 5.24984 0.5C6.79984 0.5 8.1665 1.33333 8.99984 2.16667C9.83317 1.33333 11.1998 0.5 12.7498 0.5Z"
                    fill={isFavorite ? '#F61010' : 'rgba(255,255,255,0.7)'}
                  />
                </svg>
              </button>
            </div>
            <div className="property-modal-media__footer-stats">
              <div className="stat-item">
                <span className="label">{t('card.remaining-time')}</span>
                <span className="val highlight">{property.remainingTimeValue}</span>
              </div>
              <div className="stat-item">
                <span className="label">{t('card.current-bid')}</span>
                <span className="val primary">{property.priceValue}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Bidding */}
          <div className="property-modal-details">
            <div className="property-modal-details__header">
              <h2>{property.title}</h2>
              <p className="description">{property.description}</p>
            </div>

            <div className="property-spec-chips">
              <div className="spec-chip">
                <span className="spec-title">{t('modal.platform')}</span>
                <span className="spec-data">{property.platform}</span>
              </div>
              <div className="spec-chip">
                <span className="spec-title">{t('modal.coordinates')}</span>
                <span className="spec-data">{property.coordinates}</span>
              </div>
              <div className="spec-chip">
                <span className="spec-title">{t('modal.highest-bidder')}</span>
                <span className="spec-data code">{property.highestBidder}</span>
              </div>
            </div>

            {/* Bidding Form */}
            <form className="property-bid-form" onSubmit={handleSubmitBid}>
              <div className="form-header">
                <label htmlFor="bid-input">{t('modal.your-bid')}</label>
                <div className="quick-bid-buttons">
                  <button type="button" onClick={() => handleQuickAdd(0.5)}>+0.5 ETH</button>
                  <button type="button" onClick={() => handleQuickAdd(1.0)}>+1.0 ETH</button>
                  <button type="button" onClick={() => handleQuickAdd(5.0)}>+5.0 ETH</button>
                </div>
              </div>

              <div className="input-row">
                <input
                  id="bid-input"
                  type="number"
                  step="0.01"
                  min={currentPriceNum + 0.01}
                  placeholder={`> ${property.priceValue}`}
                  value={customBid}
                  onChange={(e) => {
                    setCustomBid(e.target.value);
                    setErrorMsg('');
                  }}
                />
                {!wallet.isConnected ? (
                  <button
                    type="button"
                    className="bid-action-btn connect"
                    onClick={onOpenWalletModal}
                  >
                    {t('connect-wallet')}
                  </button>
                ) : (
                  <button type="submit" className="bid-action-btn submit">
                    {t('modal.confirm-bid')}
                  </button>
                )}
              </div>

              {errorMsg && <div className="bid-alert error">{errorMsg}</div>}
              {successMsg && <div className="bid-alert success">{successMsg}</div>}
            </form>

            {/* Bid History */}
            <div className="property-bid-history">
              <h4>{t('modal.bid-history')} ({property.bidsCount})</h4>
              <div className="history-list">
                {property.bidHistory.map((item, index) => (
                  <div key={index} className="history-item">
                    <div className="bidder-col">
                      <span className="bidder-id">{item.bidder}</span>
                      <span className="bid-time">{item.time}</span>
                    </div>
                    <span className="bid-amount">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
