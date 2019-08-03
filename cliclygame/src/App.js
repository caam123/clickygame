import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import cards from "./cards.json";
import Navbar from "./components/navbar";
import Cards from "./components/cards";
import Hero from "./components/hero";


class App extends Component {

  state = {
    cards,
    score: 0,
    topscore: 0
  }

  render(){
    return (
      <div>
       <Navbar/>
       <Hero/>
       <main>
       {this.state.cards.map(card => (
         <Cards
         id = {card.id}
         key = {card.id}
         image = {card.image}
         />
       ))}
       </main>
      </div> 
     );
  };
}


export default App;
