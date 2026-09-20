export interface BidEntry {
  bidder: string;
  amount: string;
  time: string;
}

export interface PropertyItem {
  id: string;
  title: string;
  description: string;
  image: string;
  platform: 'Decentraland' | 'The Sandbox' | 'Somnium Space' | 'Voxels';
  coordinates: string;
  category: 'villa' | 'penthouse' | 'island' | 'gallery';
  remainingTimeValue: string;
  remainingTimeLabel?: string;
  priceValue: string;
  priceLabel?: string;
  highestBidder: string;
  bidsCount: number;
  bidHistory: BidEntry[];
  virtualTourUrl?: string;
  liked?: boolean;
}

export interface WalletState {
  isConnected: boolean;
  address: string;
  balance: string;
  network: string;
  providerName: string;
}
