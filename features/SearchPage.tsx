import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
// import { HotelCard, FlightCard, CarCard } from '../components';

const SearchPage: React.FC = () => {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('2023-01-28');
  const [endDate, setEndDate] = useState('2023-01-29');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    router.push(`/search/${destination}/${startDate}/${endDate}/${adults}/${children}`);
  };

  return (
    <div className="container">
      <div className="hero">
        <Image
          src="/images/taj-mahal.jpg"
          alt="Taj Mahal"
          width={1280}
          height={720}
        />
        <div className="hero-text">
          <h1>Search for Travel</h1>
          <p>Find the perfect hotel, flight, or car for your next trip.</p>
        </div>
      </div>

      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <div className="search-input">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
            />
          </div>

          <div className="search-dates">
            <div className="search-date">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
              />
            </div>

            <div className="search-date">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
              />
            </div>
          </div>

          <div className="search-guests">
            <div className="search-guest">
              <label htmlFor="adults">Adults:</label>
              <select
                id="adults"
                value={adults}
                onChange={(event) => setAdults(parseInt(event.target.value))}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="search-guest">
              <label htmlFor="children">Children:</label>
              <select
                id="children"
                value={children}
                onChange={(event) => setChildren(parseInt(event.target.value))}
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit">Search</button>
        </form>
      </div>

      <div className="recent-searches">
        <h2>Recent Searches</h2>
        <div className="recent-search">
          <div className="recent-search-info">
            <h3>Hotel JW Marriott</h3>
            <p>"For where thy treasure is, there also will thy heart be."</p>
          </div>

          <div className="recent-search-actions">
            <button>Amenities</button>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;