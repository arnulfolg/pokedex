import React from 'react'
import Loading from './../Loading/Loading'
import useFetch from 'use-http'

const API = "https://pokeapi.co/api/v2/pokemon/"

function PokemonCard({pokemonNumber, types}) {


	const { loading, error, data = [] } = useFetch(`${API}${pokemonNumber}`, {}, [pokemonNumber])
	 
	return (
		<section className="pokemon">
		 {error && 'Error...'}
		 {loading ? <Loading /> 
		 :
		<>
			<h2>#{data.id} {data.species.name}</h2>


			<picture className="images">
	<img className="images_main" src={data.sprites.other["official-artwork"].front_default} alt=""/>
			<img className="images_shiny" src={data.sprites.front_shiny} alt=""/>
			<img className="images_default" src={data.sprites.front_default} alt=""/>
			</picture>
	
					<section className="types">
		<ul>
			{types(data.types)}
				{data.types.map(item => {
					return <li key={item.slot} className={"type " + item.type.name}>{item.type.name}</li>
				})}
				
			</ul>
			</section>

		</>
		}

		</section>
	)
}

export default PokemonCard
