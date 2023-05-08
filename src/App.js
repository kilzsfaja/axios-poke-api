import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  // state var
  const [pokemons, setPokemons] = useState([])
  // axios way
  const axiosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then( (serverResponse) => {
        console.log(serverResponse)
        setPokemons(serverResponse.data.results)
      })
      .catch( (err) => console.log("***************ERROR***********", err))
  }

  return (
    <>
    <div className="App">
      <h1>POKE API</h1>
      <button onClick={axiosPokemons}>Fetch Pokemons</button>
      {/* <p>{JSON.stringify(pokemons)}</p> */}
      {pokemons.map((poke, idx) => {
        return (
        <p key={idx}>{poke.name}</p>
        )
      })}
    </div>
    </>
  );
}

export default App;