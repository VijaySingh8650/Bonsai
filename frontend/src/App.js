import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Registration from "./Components/Registration";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path="/Registration" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/projects" element={<Projects/>} />
        
      </Routes>
    </div>
  );
}

export default App;
