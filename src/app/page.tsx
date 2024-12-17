"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [ip, setIP] = useState<string | null>(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch('/api/get-ip');
        if (response.ok) {
          const data = await response.json();
          setIP(data.ip);
        } else {
          console.error('Failed to fetch IP address');
        }
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIP();
  }, []);

  return (
    <div>
      <nav className="morguns bg-[#000411] fixed w-full"> ehn77 </nav>
      <main className="mt-16 p-4">
        <h1 className="text-2xl font-bold">Your IP Address</h1>
        {ip ? (
          <p className="mt-2 text-lg">{ip}</p>
        ) : (
          <p className="mt-2 text-lg">Loading...</p>
        )}
      </main>
    </div>
  );
}
