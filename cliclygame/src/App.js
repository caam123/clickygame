import React from 'react';
import logo from './logo.svg';
import './App.css';
import cards from "./cards.json";
import Navbar from "./components/navbar";
import Container from "./components/container";
import Hero from "./components/hero";


function App() {
  return (
   <main>
    <Navbar/>
    <Hero/>
   </main> 

    
  );
}

export default App;
