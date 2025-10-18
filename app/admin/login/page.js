'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://gallerybackend-3o4k.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        router.push('/admin/dashboard');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Something went wrong: ' + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-80 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-black text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Admin Email"
          className="border text-black border-gray-300 p-2 w-full rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border text-black border-gray-300 p-2 w-full rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md w-full hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
