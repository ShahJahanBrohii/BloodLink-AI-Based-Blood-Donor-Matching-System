import React, { useState } from 'react';
import PortalHeader from './components/PortalHeader';
import MetricCard from './components/MetricCard';
import DemandForm from './components/DemandForm';
import ActiveRequestsTable from './components/ActiveRequestsTable';
import BusinessModelCanvas from './components/BusinessModelCanvas';
import CoreTeamView from './components/CoreTeamView';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeRequests, setActiveRequests] = useState([
    {
      id: 'EMG-2134',
      bloodType: 'O-',
      units: 4,
      urgency: 'Immediate',
      status: 'Matching Donors...'
    },
    {
      id: 'SRG-8821',
      bloodType: 'AB+',
      units: 2,
      urgency: 'Standard',
      status: '3 Pledged, Awaiting Confirmation'
    },
    {
      id: 'EMG-4429',
      bloodType: 'A+',
      units: 3,
      urgency: 'Immediate',
      status: '1 Pledged, En Route'
    }
  ]);
  
  
  const [activeView, setActiveView] = useState('portal'); // 'portal', 'business', or 'team'

  const handleNewRequest = (newRequest) => {
    setActiveRequests([newRequest, ...activeRequests]);
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'business':
        return <BusinessModelCanvas />;
      case 'team':
        return <CoreTeamView />; // Display CoreTeamView here
      case 'portal':
      default:
        return (
          <>
            <section className="metrics-section">
              {/* ... MetricCards ... */}
            </section>
            <DemandForm onSubmit={handleNewRequest} />
            <ActiveRequestsTable requests={activeRequests} />
          </>
        );
    }
  };

  return (
    <div className="app-container">
      <PortalHeader 
        userName="Shah Jahan"
        userRole="CEO"
      />

      <main className="main-content">
        <div className="view-toggle">
          {/* 1. Hospital Portal Button */}
          <button 
            className={`toggle-btn ${activeView === 'portal' ? 'active' : ''}`}
            onClick={() => setActiveView('portal')}
          >
            🩸 Hospital Portal
          </button>
          
          {/* 2. Business Model Button */}
          <button 
            className={`toggle-btn ${activeView === 'business' ? 'active' : ''}`}
            onClick={() => setActiveView('business')}
          >
            📊 Business Model
          </button>
          
          {/* 3. Core Team Button */}
          <button 
            className={`toggle-btn ${activeView === 'team' ? 'active' : ''}`}
            onClick={() => setActiveView('team')}
          >
            👥 Core Team
          </button>
        </div>

        {renderActiveView()}

      </main>
      <Footer />
    </div>
  );
}

export default App;