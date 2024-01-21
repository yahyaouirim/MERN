import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        setPokemon(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>pokemon Name</h1>
      <ul style={{width:"200px", margin:"auto"}}>
        {pokemon.map((onePokemon, index) => (
          <li key={index}>{onePokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
