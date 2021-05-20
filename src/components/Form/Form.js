import React from 'react'
import {useFormik } from 'formik'

function Form({handleChange}) {


	const formik = useFormik({
		initialValues: {
			pokemonNumber: 1
		},
		onSubmit: ({pokemonNumber}) => {
			handleChange(pokemonNumber)
		}
	})

	const searchRandomPokemon = (e) => {
		const randomPokemonId = Math.round(Math.random() * (898 - 1) + 1);
		formik.values.pokemonNumber = randomPokemonId
		handleChange(randomPokemonId)
};
	
	return (
		<form className="form" onSubmit={formik.handleSubmit}>
			<section className="numbers">
				<input className="input" type="number" id="pokemonNumber" name="pokemonNumber" onChange={formik.handleChange} value={formik.values.pokemonNumber} />
			</section>
			<section>
				<button className="button" type="submit">Search</button>
			</section>
			<section>
				<button className="button" type="button" onClick={searchRandomPokemon}>Random Pokemon</button>
			</section>
		</form>
	)
}

export default Form
