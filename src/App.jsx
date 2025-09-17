
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css'
import { useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const { user } = useAuth();

  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/login" />} />
        {/* <Route path="/task/:id" element={user ? <TaskPage /> : <Navigate to="/login" />} /> */}
        <Route path="/" element={<Navigate to={user ? '/dashboard' : '/login'} />} />
      </Routes>
  );
}

export default App
