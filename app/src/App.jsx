import './App.css';
import React, { useEffect, useState } from 'react';
import Input from './components/Input/Input';
import Output from './components/Output/Output';

function App() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationData = async (pincode) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.zippopotam.us/in/${pincode}`);

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error('Postal code not found');
        } else {
          throw new Error('Error Fetching Data');
        }
      }

      const data = await res.json();
      console.log(data);
      setLocation(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setLocation(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLocation(null);
  }, []);

  const clearLocationData = () => {
    setLocation(null);
  };

  return (
    <div>
      <h1>Postal Code Location Lookup</h1>
      <Input onSubmit={fetchLocationData} />
      {loading ? <div className="loading-bar"></div> : <Output data={location} />}
      {error && <p className="error">{error}</p>}
      <button onClick={clearLocationData} className="clear-button">Clear Location Information</button>
    </div>
  );
}

export default App;
