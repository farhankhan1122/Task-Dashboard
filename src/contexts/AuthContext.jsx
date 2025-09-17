import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('td_user');
    return raw ? JSON.parse(raw) : null;
  });

  const login = (username) => {
    const fakeUser = { id: 'u1', name: username || 'Demo User', email: 'demo@example.com' };
    localStorage.setItem('td_user', JSON.stringify(fakeUser));
    setUser(fakeUser);
  };
  const logout = () => {
    localStorage.removeItem('td_user');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
