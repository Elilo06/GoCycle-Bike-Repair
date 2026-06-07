import React, { useState } from 'react'
import './App.css'
import Home from './components/Home';
import BookAService from './components/BookAService';
import BikeShop from './components/BikeShop';
import AboutUs from './components/AboutUs';

function App() {
  // State to track which tab is active. Default is the first tab.
  const [activeTab, setActiveTab] = useState('Home');
  const tabs = ['Home', 'Book A Service', 'Bike Shop', 'About Us'];

  // Define what content to show for each tab here
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home setActiveTab={setActiveTab} />;
      case 'Book A Service':
        return <BookAService setActiveTab={setActiveTab}/>;
      case 'Bike Shop':
        return <BikeShop setActiveTab={setActiveTab}/>;
      case 'About Us':
        return <AboutUs setActiveTab={setActiveTab}/>;
      default:
        return <div>Select a tab to see content.</div>;
    }
  };

  return (
    <div className="App">
      <div className="blue-background"></div>
      <div className="header-top">
        <div className="logo"> <img src="../images/GoCycle_FullLogo.png" alt="logo" width={800} height={400}/></div>
        <div className="contact-info">
          <div className="contact-item">
            <img src="../images/location_icon.png" alt="address" className="contact-icon" />
            <div className="nunito-address">1234 St. Laurent Blvd, Ottawa, ON</div>
          </div>
          <div className="contact-item">
            <img src="../images/phone_icon.png" alt="phone" className="contact-icon" />
            <div className="nunito-phone">(613) 123-4667</div>
          </div>
          <div className="contact-item">
            <img src="../images/mail_icon.png" alt="email" className="contact-icon" />
            <div className="nunito-mail">gocycleottawa@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="orange-line"></div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  )
}

export default App
