'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);
  const router = useRouter();

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  // ✅ Check login
  useEffect(() => {
    if (!token) router.push('/admin/login');
    else fetchCards();
  }, [router, token]);

  // ---------------- FETCH CARDS ----------------
  const fetchCards = async () => {
    try {
      const res = await fetch('https://gallerybackend-3o4k.onrender.com/api/cards', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setCards(data);
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------- CREATE / UPDATE ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      const url = editId
        ? `https://gallerybackend-3o4k.onrender.com/api/cards/${editId}`
        : 'https://gallerybackend-3o4k.onrender.com/api/cards';
      const method = editId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (res.ok) {
        alert(editId ? 'Card updated!' : 'Card added!');
        setTitle('');
        setDescription('');
        setImage(null);
        setEditId(null);
        fetchCards();
      } else {
        alert('Failed to save card');
      }
    } catch (err) {
      console.error(err);
      alert('Server error!');
    }
  };

  // ---------------- EDIT CARD ----------------
  const handleEdit = (card) => {
    setTitle(card.title);
    setDescription(card.description);
    setEditId(card._id);
  };

  // ---------------- DELETE CARD ----------------
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this card?')) return;
    try {
      const res = await fetch(`https://gallerybackend-3o4k.onrender.com/api/cards/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        alert('Card deleted!');
        fetchCards();
      } else {
        alert('Failed to delete');
      }
    } catch (err) {
      console.error(err);
      alert('Server error!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-[#1a143d] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">
        Admin Dashboard
      </h1>

      {/* Form */}
  <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Title"
    className="border rounded p-2 bg-[#2a204d] text-white placeholder-gray-400"
    required
  />
  <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Description"
    className="border rounded p-2 bg-[#2a204d] text-white placeholder-gray-400"
    required
  />
  <input
    type="file"
    onChange={(e) => setImage(e.target.files[0])}
    className="border rounded p-2 text-white"
    accept="image/*"
  />
  <button
    type="submit"
    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
  >
    {editId ? 'Update Card' : 'Add Card'}
  </button>
</form>


      {/* Card List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <div
            key={card._id}
            className="border p-3 rounded shadow flex flex-col justify-between bg-[#2a204d]"
          >
            <div>
              <h2 className="font-bold text-lg text-white">{card.title}</h2>

              {/* ✅ Image Preview */}
              {card._id && (
                <div className="mt-2 w-full h-40 relative rounded overflow-hidden">
                  <img
                    src={`https://gallerybackend-3o4k.onrender.com/api/cards/${card._id}/image`}
                    alt={card.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              )}
              <p className="mt-2 text-white">{card.description}</p>
            </div>

            <div className="flex justify-between mt-3">
              <button
                onClick={() => handleEdit(card)}
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(card._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
