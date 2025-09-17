import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [name, setName] = useState('');
  const { login } = useAuth();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name || 'Demo User');
    nav('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded w-full max-w-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="w-full mb-3 p-2 border rounded"/>
        <button className="w-full bg-blue-600 text-white p-2 rounded cursor-pointer">Login</button>
      </form>
    </div>
  );
}
