import React, {useState, useEffect} from 'react'
import Loading from './../Loading/Loading'
import useFetch from 'use-http'

const API = "https://pokeapi.co/api/v2/pokemon/"

function PokemonCard({pokemonNumber}) {

const [shiny, setshiny] = useState(false)	

useEffect(() => {
	setshiny(false)
}, [pokemonNumber])


	const { loading, error, data = [] } = useFetch(`${API}${pokemonNumber}`, {}, [pokemonNumber])

	const capitalizeWord = (str) => {
		const start = str.slice(0,1).toUpperCase()
		const end = str.slice(1)

		return start+end
	}

	const toggleShiny = () => {
		setshiny(!shiny)
	}
	 
	return (
		<>
		 {error && 'Error...'}
		 {loading ? <Loading /> 
		 :
		<section className="pokemon">
			<h2>{data.id} - {capitalizeWord(data.species.name)}</h2>
			<section className="types">
				<p>Types</p>
		<ul>
				{data.types.map(item => {
					return <li key={item.slot}>{item.type.name}</li>
				})}
				
			</ul>
			</section>
	
			{shiny ? 
			<img src={data.sprites.front_shiny} alt=""/>
			: 
			<img src={data.sprites.front_default} alt=""/>

		}
			<button type="button" onClick={toggleShiny}>Toggle Shiny</button>
		</section>
		}

		</>
	)
}

export default PokemonCard
