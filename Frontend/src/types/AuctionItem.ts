export interface AuctionItem {
  id?: number;
  itemName: string;
  itemDescription: string;
  companyName: string;
  companyLocation: string;
  companySummary: string;
  currentAuctionPrice: number;
  auctionTimeLeft: string;
  retailPrice: number;
  numberOfBids: number;
}
