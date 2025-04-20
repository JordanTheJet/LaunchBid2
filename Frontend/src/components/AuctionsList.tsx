import React, { useEffect, useState } from 'react';
import { AuctionItem } from '../types/AuctionItem';
import { auctionService } from '../services/auctionService';

const AuctionsList: React.FC = () => {
  const [auctionItems, setAuctionItems] = useState<AuctionItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuctionItems = async () => {
      try {
        const items = await auctionService.getAuctionItems();
        setAuctionItems(items);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch auction items');
        setLoading(false);
      }
    };

    fetchAuctionItems();
  }, []);

  if (loading) {
    return <div>Loading auction items...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Current Auctions</h2>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Company</th>
            <th>Location</th>
            <th>Current Price</th>
            <th>Retail Price</th>
            <th>Time Left</th>
            <th>Bids</th>
          </tr>
        </thead>
        <tbody>
          {auctionItems.map((item) => (
            <tr key={item.id}>
              <td>{item.itemName}</td>
              <td>{item.itemDescription}</td>
              <td>{item.companyName}</td>
              <td>{item.companyLocation}</td>
              <td>${item.currentAuctionPrice.toFixed(2)}</td>
              <td>${item.retailPrice.toFixed(2)}</td>
              <td>{item.auctionTimeLeft}</td>
              <td>{item.numberOfBids}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuctionsList;
