import { PropertyItem } from '../types';

export const INITIAL_PROPERTIES: PropertyItem[] = [
  {
    id: 'prop-1',
    title: 'Neo-Kyoto Sky Penthouse',
    description: '@Aethelgard Labs',
    image: '/assets/penthouse.jpg',
    platform: 'The Sandbox',
    coordinates: '[X: -65, Y: 182]',
    category: 'penthouse',
    remainingTimeValue: '08h : 22m : 45s',
    priceValue: '68.20 ETH',
    highestBidder: '0x8f3C...7b91',
    bidsCount: 24,
    bidHistory: [
      { bidder: '0x8f3C...7b91', amount: '68.20 ETH', time: '12 mins ago' },
      { bidder: '0x41dA...E82a', amount: '65.00 ETH', time: '45 mins ago' },
      { bidder: '0x992B...C014', amount: '61.50 ETH', time: '2 hours ago' }
    ],
    liked: false
  },
  {
    id: 'prop-2',
    title: 'Aetheria Celestial Sanctuary',
    description: '@Horizon Worlds Guild',
    image: '/assets/floating-island.jpg',
    platform: 'Decentraland',
    coordinates: '[X: 230, Y: -90]',
    category: 'island',
    remainingTimeValue: '14h : 15m : 10s',
    priceValue: '94.00 ETH',
    highestBidder: '0x32A4...D908',
    bidsCount: 38,
    bidHistory: [
      { bidder: '0x32A4...D908', amount: '94.00 ETH', time: '5 mins ago' },
      { bidder: '0x17F0...66BC', amount: '90.50 ETH', time: '30 mins ago' },
      { bidder: '0x55E9...A120', amount: '87.00 ETH', time: '3 hours ago' }
    ],
    liked: true
  },
  {
    id: 'prop-3',
    title: 'Apex Cyber Villa',
    description: '@Matrix Architects',
    image: '/assets/cyber-villa.jpg',
    platform: 'Somnium Space',
    coordinates: '[X: 104, Y: 56]',
    category: 'villa',
    remainingTimeValue: '05h : 48m : 19s',
    priceValue: '42.50 ETH',
    highestBidder: '0x66B2...11FA',
    bidsCount: 19,
    bidHistory: [
      { bidder: '0x66B2...11FA', amount: '42.50 ETH', time: '20 mins ago' },
      { bidder: '0x948A...CC31', amount: '39.80 ETH', time: '1 hour ago' }
    ],
    liked: false
  },
  {
    id: 'prop-4',
    title: 'Cosmic Nexus Art Pavilion',
    description: '@MetaVerse DAO',
    image: '/assets/virtual-gallery.jpg',
    platform: 'Voxels',
    coordinates: '[X: 0, Y: 15]',
    category: 'gallery',
    remainingTimeValue: '21h : 04m : 33s',
    priceValue: '51.30 ETH',
    highestBidder: '0x09EC...4432',
    bidsCount: 31,
    bidHistory: [
      { bidder: '0x09EC...4432', amount: '51.30 ETH', time: '8 mins ago' },
      { bidder: '0x77DA...55BF', amount: '48.00 ETH', time: '2 hours ago' }
    ],
    liked: false
  },
  {
    id: 'prop-5',
    title: 'Wish House Estate',
    description: '@UA Real Estate Agency',
    image: '/assets/rachel-claire.png',
    platform: 'Decentraland',
    coordinates: '[X: 12, Y: -84]',
    category: 'villa',
    remainingTimeValue: '09h : 45m : 08s',
    priceValue: '29.71 ETH',
    highestBidder: '0x71C8...3E90',
    bidsCount: 16,
    bidHistory: [
      { bidder: '0x71C8...3E90', amount: '29.71 ETH', time: '15 mins ago' },
      { bidder: '0x2289...FD34', amount: '27.50 ETH', time: '1 hour ago' }
    ],
    liked: true
  },
  {
    id: 'prop-6',
    title: 'Zenith Horizon Residence',
    description: '@Nova Prime Real Estate',
    image: '/assets/penthouse.jpg',
    platform: 'The Sandbox',
    coordinates: '[X: -18, Y: 74]',
    category: 'penthouse',
    remainingTimeValue: '17h : 30m : 00s',
    priceValue: '36.80 ETH',
    highestBidder: '0x99A1...BB02',
    bidsCount: 14,
    bidHistory: [
      { bidder: '0x99A1...BB02', amount: '36.80 ETH', time: '40 mins ago' },
      { bidder: '0x1245...EE89', amount: '34.00 ETH', time: '3 hours ago' }
    ],
    liked: false
  }
];
