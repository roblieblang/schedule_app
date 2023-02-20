import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage  from "./pages/WelcomePage";
import ProfilePage from "./pages/ProfilePage";
import CalendarPage from "./pages/CalendarPage.js"
import Dashboard from './pages/DashboardPage';
import MyChronotypePage from './pages/MyChronotypePage.js';
import './pages/App.css';

export default function App() {
  const { isLoading, error } = useAuth0();

  if (!error && isLoading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Authentication Error!</p>
  } else {
    return (
      <div>
      <Routes>
        <Route path="/" exact element={<WelcomePage />} />
        <Route path = "/dashboard" exact element={<Dashboard />} />
        <Route path="/profile" exact element={<ProfilePage/>} />
        <Route path="/calendar" exact element={<CalendarPage/>} />
        <Route path="/mychronotype" exact element={<MyChronotypePage/>} />
      </Routes>
      </div>
    );
  }
}