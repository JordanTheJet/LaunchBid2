import React, { useState } from 'react';
import './App.css';
import AuctionsList from './components/AuctionsList';
import AdminDashboard from './components/AdminDashboard';

type TabType = 'auctions' | 'admin';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('auctions');

  return (
    <div className="App">
      <header className="App-header">
        <h1>LaunchBid2</h1>
      </header>
      
      <div className="tab-container">
        <div 
          className={`tab ${activeTab === 'auctions' ? 'active' : ''}`}
          onClick={() => setActiveTab('auctions')}
        >
          Auctions
        </div>
        <div 
          className={`tab ${activeTab === 'admin' ? 'active' : ''}`}
          onClick={() => setActiveTab('admin')}
        >
          Admin Dashboard
        </div>
      </div>
      
      <div className="tab-content">
        {activeTab === 'auctions' && <AuctionsList />}
        {activeTab === 'admin' && <AdminDashboard />}
      </div>
    </div>
  );
};

export default App;
