import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MessagePage from './pages/MessagePage';
import LayoutPage from './pages/LayoutPage';
import TweetPage from './pages/TweetPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage />} >
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="messages" element={<MessagePage />} />
          <Route path="tweet" element={<TweetPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App;
