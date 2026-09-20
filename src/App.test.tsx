import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import './i18n';

describe('ProHouse Application Suite', () => {
  test('renders ProHouse application branding and navigation items', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    const brandElements = screen.getAllByText(/ProHouse/i);
    expect(brandElements.length).toBeGreaterThan(0);

    const marketplaceNavs = screen.getAllByText(/Marketplace/i);
    expect(marketplaceNavs.length).toBeGreaterThan(0);

    expect(screen.getByText(/Future of real estate investing/i)).toBeInTheDocument();
  });

  test('opens wallet modal when clicking Connect Wallet and connects MetaMask', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const connectBtns = screen.getAllByText(/Connect Wallet/i);
    fireEvent.click(connectBtns[0]);

    // Modal title should appear
    expect(screen.getByText(/Connect Your Wallet/i)).toBeInTheDocument();

    // Click MetaMask provider within the modal
    const metamaskOptions = screen.getAllByText(/MetaMask/i);
    const providerOption = metamaskOptions.find(el => el.classList.contains('wallet-name')) || metamaskOptions[0];
    fireEvent.click(providerOption);

    // Modal closes and header displays connected address
    expect(screen.getAllByText(/0x71C84...F319/i).length).toBeGreaterThan(0);
  });

  test('filters properties by category in Marketplace', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const skyPenthousesBtn = screen.getByText(/Sky Penthouses/i);
    fireEvent.click(skyPenthousesBtn);

    // Neo-Kyoto Sky Penthouse should be visible
    expect(screen.getAllByText(/Neo-Kyoto Sky Penthouse/i).length).toBeGreaterThan(0);
  });
});
