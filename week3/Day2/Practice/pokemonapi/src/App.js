import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setPokemon(data.results);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  return (
    <div className="App" >
      <h1 style={{margin:"50px auto"}}> pokemon API</h1>
      <ul style={{width:"200px", margin:"auto"}}>
      {pokemon.map((onePokemon, index) => (
        <li key={index}>{onePokemon.name}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
