import { AuctionItem } from '../types/AuctionItem';

export const mockAuctionItems: AuctionItem[] = [
  {
    id: 1,
    itemName: 'Premium Laptop',
    itemDescription: 'High-performance laptop with the latest specifications',
    companyName: 'TechGiant',
    companyLocation: 'San Francisco, CA',
    companySummary: 'Leading technology company specializing in consumer electronics',
    currentAuctionPrice: 1200,
    auctionTimeLeft: '2 days, 5 hours',
    retailPrice: 1800,
    numberOfBids: 15
  },
  {
    id: 2,
    itemName: 'Professional Camera',
    itemDescription: 'DSLR camera with multiple lenses and accessories',
    companyName: 'PhotoPro',
    companyLocation: 'New York, NY',
    companySummary: 'Photography equipment manufacturer with 20 years of experience',
    currentAuctionPrice: 850,
    auctionTimeLeft: '1 day, 12 hours',
    retailPrice: 1200,
    numberOfBids: 8
  },
  {
    id: 3,
    itemName: 'Smart Home System',
    itemDescription: 'Complete smart home automation package',
    companyName: 'HomeConnect',
    companyLocation: 'Seattle, WA',
    companySummary: 'Smart home solutions provider focused on user-friendly technology',
    currentAuctionPrice: 450,
    auctionTimeLeft: '3 days, 8 hours',
    retailPrice: 700,
    numberOfBids: 5
  }
];
