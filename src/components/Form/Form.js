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
	
	const addNumber = () => {
		formik.values.pokemonNumber = formik.values.pokemonNumber+1
		handleChange(formik.values.pokemonNumber)
	}

	const subNumber = () => {
		formik.values.pokemonNumber = formik.values.pokemonNumber-1
		handleChange(formik.values.pokemonNumber)
	}

	const searchRandomPokemon = (e) => {
		const randomPokemonId = Math.round(Math.random() * (898 - 1) + 1);
		formik.values.pokemonNumber = randomPokemonId
		handleChange(randomPokemonId)
};
	
	return (
		<form onSubmit={formik.handleSubmit}>
			<section>
				<button type="button" onClick={subNumber}>-</button>
			</section>
			<section>
				<label htmlFor="pokemonNumber">Pokemon Number</label>
				<input type="number" id="pokemonNumber" name="pokemonNumber" onChange={formik.handleChange} value={formik.values.pokemonNumber} />
			</section>
			<section>
				<button type="button" onClick={addNumber}>+</button>
			</section>
			<section>
				<button type="button" onClick={searchRandomPokemon}>Random Pokemon</button>
			</section>
			<section>
				<button type="submit">Search</button>
			</section>
		</form>
	)
}

export default Form
