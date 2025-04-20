import React, { useState } from 'react';
import { AuctionItem } from '../types/AuctionItem';
import { auctionService } from '../services/auctionService';

const initialFormState: Omit<AuctionItem, 'id'> = {
  itemName: '',
  itemDescription: '',
  companyName: '',
  companyLocation: '',
  companySummary: '',
  currentAuctionPrice: 0,
  auctionTimeLeft: '',
  retailPrice: 0,
  numberOfBids: 0
};

const AdminDashboard: React.FC = () => {
  const [formData, setFormData] = useState<Omit<AuctionItem, 'id'>>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle numeric values
    if (name === 'currentAuctionPrice' || name === 'retailPrice' || name === 'numberOfBids') {
      setFormData({
        ...formData,
        [name]: value === '' ? 0 : parseFloat(value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      await auctionService.createAuctionItem(formData);
      setMessage('Auction item created successfully!');
      setFormData(initialFormState);
    } catch (error) {
      setMessage('Failed to create auction item. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard - Create Auction Item</h2>
      {message && <div className={message.includes('success') ? 'success-message' : 'error-message'}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="itemDescription">Item Description</label>
          <textarea
            id="itemDescription"
            name="itemDescription"
            value={formData.itemDescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyLocation">Company Location</label>
          <input
            type="text"
            id="companyLocation"
            name="companyLocation"
            value={formData.companyLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companySummary">Company Summary</label>
          <textarea
            id="companySummary"
            name="companySummary"
            value={formData.companySummary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentAuctionPrice">Current Auction Price</label>
          <input
            type="number"
            id="currentAuctionPrice"
            name="currentAuctionPrice"
            value={formData.currentAuctionPrice}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="retailPrice">Retail Price</label>
          <input
            type="number"
            id="retailPrice"
            name="retailPrice"
            value={formData.retailPrice}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="auctionTimeLeft">Auction Time Left</label>
          <input
            type="text"
            id="auctionTimeLeft"
            name="auctionTimeLeft"
            value={formData.auctionTimeLeft}
            onChange={handleChange}
            placeholder="e.g., 2 days, 5 hours"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfBids">Number of Bids</label>
          <input
            type="number"
            id="numberOfBids"
            name="numberOfBids"
            value={formData.numberOfBids}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? 'Creating...' : 'Create Auction Item'}
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
