import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx';
import './index.css';
import GoalDetails from './components/GoalDetails.jsx';
import ProjectDetails from './ProjectDetails.jsx'; // NEW IMPORT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. WRAP: The entire application in the BrowserRouter */}
    <BrowserRouter>
      {/* 3. DEFINE: The Routes container */}
      <Routes>
        {/* Route 1: Home page (App.jsx with all its content) */}
        <Route path="/" element={<App />} />
        
        {/* Route 2: Goal Details page */}
        <Route path="/goal-details" element={<GoalDetails />} />

        <Route path="/project/:slug" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


