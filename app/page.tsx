'use client';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/cards');
      const data = await res.json();
      setCards(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
   <>
  <Navbar />
  <div className="container mx-auto p-4 bg-[#1a143d] min-h-screen text-white">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.length > 0 ? (
        cards.map((card) => <Card key={card} card={card} />)
      ) : (
        <p className="text-center text-gray-400">No cards found</p>
      )}
    </div>
  </div>
</>

  );
}
