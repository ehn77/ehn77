// pages/ip.js
import { useEffect, useState } from 'react';

export default function IPPage() {
  const [ip, setIP] = useState(null);

  useEffect(() => {
    fetch('/api/get-ip')
      .then((response) => response.json())
      .then((data) => setIP(data.ip))
      .catch((error) => console.error('Error fetching IP:', error));
  }, []);

  return (
    <div>
      <h1>Your IP Address</h1>
      {ip ? <p>{ip}</p> : <p>Loading...</p>}
    </div>
  );
}
