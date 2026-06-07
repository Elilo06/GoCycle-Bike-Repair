import React from 'react';
import './Home.css';

function Home({ setActiveTab }) {
  return (
    <div className="home-container">
        <div className="home-header">Welcome to GoCycle!</div>
      <div className="bike-services-container">
        <div className="left-side">
          <img src="../images/bike-repair-image.jpg" alt="Bike Services"  className="content-image"/>
        </div>
        <div className="right-side">
          <h2>Bike Services</h2>
          <p>Our expert technicians offer a variety of bike services, including tune-ups, cleaning and safety inspections. Book online by choosing your required service, or call us if you don’t know where to start!</p>
          <button onClick={() => setActiveTab('Book A Service')}>Book Now</button>
        </div>
      </div>
    <div className="bike-supplies-container">
        <div className="left-side">
          <img src="../images/bike-supplies-image.webp" alt="Bike Supplies"  className="content-image" />
        </div>
        <div className="right-side">
          <h2>Bikes and Bike Supplies</h2>
          <p>Come in to browse our selection of city bikes, racing bikes and mountain bikes! Wide range of colours and detailings available, with flexible pricing options for all budgets.</p>
          <button onClick={() => setActiveTab('Bike Shop')}>More Info</button>
        </div>
    </div>
  </div>
  )
}
export default Home;