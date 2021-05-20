import React from 'react'
import Loading from './../Loading/Loading'
import Chip from './../Chip/Chip'
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
	
					<section className="">
		<ul>
			{types != null ? types(data.types) : null}
				{data.types.map(item => {
					return <Chip key={item.slot} name={item.type.name} />
				})}
				
			</ul>
			</section>

		</>
		}

		</section>
	)
}

export default PokemonCard
