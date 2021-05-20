import React, {useState} from 'react'

import './App.css';

import Form from './components/Form/Form'
import Header from './components/Header/Header'
import PokemonCard from './components/PokemonCard/PokemonCard'

function App() {
	
	
	const [getNumber, setNumber] = useState(1)

	const changeNumber =(newNumber) => {
		setNumber(newNumber)
	}
	
  return (
    <section className="App">
        <section className="pokedex">
          <Header></Header>
        <Form handleChange={changeNumber}></Form>
        <PokemonCard pokemonNumber={getNumber}></PokemonCard>
        </section>
        
    </section>
  );
}

export default App;
