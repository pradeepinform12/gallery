'use client';

import Image from 'next/image';

export default function Card({ card }) {
  return (
    <div className="border p-4 rounded shadow w-full max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-center text-shadow-black">{card.title}</h2>

      {card._id && (
        <div className="mt-2 w-full h-64 relative rounded overflow-hidden">
          <Image
            src={`https://gallerybackend-3o4k.onrender.com/api/cards/${card._id}/image`}
            alt={card.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      )}

      <p className="mt-2">{card.description}</p>
    </div>
  );
}
