import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SideNav from '../Components/SideNav';
import Dashboard from '../Components/Dashboard';
import Transaction from '../Components/Transaction';
import FAQ from '../Components/FAQ';
import LearningModules from '../Components/LearningModules';
import Rewards from '../Components/Rewards';
import Feedback from '../Components/Feedback';
import StartImg from '../Components/StartImg';

const Home = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <div className="fixed w-64 h-full shadow-xl overflow-auto">
          <div className='shadow-lg '><img src="src/images/logo.png" alt="logo" /></div>
          <SideNav />
        </div>
        <div className="flex-1 ml-64"> {/* ml-64 to offset the content area by the width of the sidebar */}
          <Routes>
          {/* <Route path="/" element={<Navigate replace to="/dashboard" />} /> Redirect from base URL to Dashboard */}
            <Route path="/dashboard" element={<Dashboard/> } />
            <Route path="/transaction" element={<Transaction/> } />
            <Route path="/start-here" element={<StartImg/> } />
            <Route path="/faq" element={<FAQ/> } />
            <Route path="/learning-modules" element={<LearningModules/> } />
            <Route path="/rewards" element={<Rewards/>} />
            <Route path="/feedback" element={<Feedback/>} />
            {/* Define other routes as needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Home;
