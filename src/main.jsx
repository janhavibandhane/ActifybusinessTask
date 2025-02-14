import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Profile from './Home/Profile.jsx';
import Layout from './Layout.jsx';
import UserAccount from './UserInterface/UserAccount.jsx';
import UserDashboard from './UserInterface/UserDashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
         <Route path='' element={<App />}></Route>
         <Route path='/UserAccount' element={<UserDashboard />}></Route>
      </Routes>
    </Router>
  </StrictMode>,
)
