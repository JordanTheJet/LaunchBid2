import { AuctionItem } from '../types/AuctionItem';
import { mockAuctionItems } from '../data/mockData';

// This is a mock service that will be replaced with actual API calls later
export const auctionService = {
  getAuctionItems: async (): Promise<AuctionItem[]> => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockAuctionItems);
      }, 500);
    });
  },

  createAuctionItem: async (item: AuctionItem): Promise<AuctionItem> => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real application, this would be handled by the backend
        const newItem = {
          ...item,
          id: mockAuctionItems.length + 1
        };
        mockAuctionItems.push(newItem);
        resolve(newItem);
      }, 500);
    });
  }
};
