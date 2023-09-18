import React from 'react';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import LogIn from './pages/login/LogIn';
import TopBar from './components/topbar/TopBar';





function App() {
  return (
    <>

    
  <TopBar />

<div className="container">
    <Routes>
      <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
  </Routes>

  </div>
    </>
  );
};



export default App;
