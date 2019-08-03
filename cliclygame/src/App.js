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



  gameLost = () => {
    if(this.state.score > this.state.topscore){
      this.setState({topscore:this.state.score}, function(){
        console.log(this.state.topscore);
      });
    }
    this.state.cards.forEach(card=>{
      card.count= 0;
    });
    alert(`Game over | Your Score: ${this.state.score}`);
    this.setState({score:0});
    return true;
  }

  win = function(){
    alert(`You Won! Your score was: ${this.state.score}`);
    if(this.state.score > this.state.topscore){
      this.setState({topscore: this.state.score});
    }
    this.state.cards.sort(()=>Math.random()-0.5)
    this.setState({score:0});
    this.state.cards.forEach(card =>{
      card.count = 0;
    })
    return true;
  }

  clickCount = id =>{
    this.state.cards.find((o,i) =>{
      if(o.id === id){
        if(cards[i].count === 0){
          cards[i].count =+ 1;
          this.setState({score:this.state.score +1}, function(){
            console.log(this.state.score);
            if(this.state.score ==12){
              this.win();
            }
          });
        this.state.cards.sort(()=>Math.random()-0.5)
        return true;
        }
        else{
          this.gameLost();
        }
      }
    });
  }

  render(){
    return (
      <div>
       <Navbar
       score= {this.state.score}
       topscore= {this.state.topscore}/>
       <Hero/>
       <main>
       {this.state.cards.map(card => (
         <Cards
         clickCount = {this.clickCount}
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
