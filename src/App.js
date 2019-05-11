import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PokemonCard from "./components/Card/card";
import Footer from "./components/Footer";
import pokemon from "./pokemon.json";

class App extends Component {
  state = {
    pokemon,
    clickedPokemon: [],
    score: 0
  };


  imageClick = event => {
    const currentPokemon = event.target.alt;
    const PokemonAlreadyClicked =
      this.state.clickedPokemon.indexOf(currentPokemon) > -1;


    if (PokemonAlreadyClicked) {
      this.setState({
        Pokemon: this.state.pokemon.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPokemon: [],
        score: 0
      });
        alert("Lol you lose. Want to lose again?");

    } else {
      this.setState(
        {
          pokemon: this.state.pokemon.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPokemon: this.state.clickedPokemon.concat(
            currentPokemon
          ),
          score: this.state.score + 1
        },
       
        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              pokemon: this.state.pokemon.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPokemon: [],
              score: 0
            });
          }
        }
      );
    }
  };


render() {
  return (
    <div>
      <Navbar 
        score={this.state.score}
      />
      <Jumbotron />
      <div className="wrapper">
        {this.state.pokemon.map(pokemon => (
          <PokemonCard
            imageClick={this.imageClick}
            id={pokemon.id}
            key={pokemon.id}
            image={pokemon.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
}
export default App;