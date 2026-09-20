import React from 'react';
import { useTranslation } from 'react-i18next';
import { PropertyItem } from '../../types';
import './favorites-drawer.scss';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: PropertyItem[];
  onRemoveFavorite: (id: string) => void;
  onSelectProperty: (property: PropertyItem) => void;
  onClearAll: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onSelectProperty,
  onClearAll
}) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="favorites-drawer-overlay" onClick={onClose}>
      <div
        className="favorites-drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="favorites-drawer-header">
          <div className="title-group">
            <h3>{t('modal.favorites-title')}</h3>
            <span className="count-pill">{favorites.length}</span>
          </div>
          <div className="header-actions">
            {favorites.length > 0 && (
              <button className="clear-btn" onClick={onClearAll}>
                {t('modal.clear-all')}
              </button>
            )}
            <button className="close-btn" onClick={onClose}>
              &times;
            </button>
          </div>
        </div>

        <div className="favorites-drawer-content">
          {favorites.length === 0 ? (
            <div className="empty-favorites">
              <div className="empty-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
              </div>
              <p>{t('modal.no-favorites')}</p>
            </div>
          ) : (
            <div className="favorites-list">
              {favorites.map((prop) => (
                <div key={prop.id} className="favorite-card">
                  <div
                    className="thumb"
                    style={{ backgroundImage: `url("${prop.image}")` }}
                  />
                  <div className="info">
                    <h4>{prop.title}</h4>
                    <span className="price">{prop.priceValue}</span>
                    <span className="platform">{prop.platform}</span>
                  </div>
                  <div className="actions">
                    <button
                      className="bid-btn"
                      onClick={() => {
                        onSelectProperty(prop);
                        onClose();
                      }}
                    >
                      {t('card.place-bid')}
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => onRemoveFavorite(prop.id)}
                      title="Remove"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
