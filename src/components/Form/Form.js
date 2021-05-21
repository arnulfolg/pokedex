import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form({ handleChange }) {
	const formik = useFormik({
		initialValues: {
			pokemonNumber: 1,
		},
		validationSchema: Yup.object({
			pokemonNumber: Yup.number()
				.min(1, "Must be at least 1")
				.max(898, "Must not be greater than 898")
				.required("Required"),
		}),
		onSubmit: ({ pokemonNumber }) => {
			handleChange(pokemonNumber);
		},
	});

	const searchRandomPokemon = (e) => {
		const randomPokemonId = Math.round(Math.random() * (898 - 1) + 1);
		formik.values.pokemonNumber = randomPokemonId;
		handleChange(randomPokemonId);
	};

	return (
		<form className="form" onSubmit={formik.handleSubmit}>
			<section className="numbers">
				<input
					className="input"
					type="number"
					id="pokemonNumber"
					name="pokemonNumber"
					onChange={formik.handleChange}
					value={formik.values.pokemonNumber}
				/>
			</section>
			<section>
				<button
					className="button"
					type="submit"
					disabled={!formik.isValid}
				>
					Search
				</button>
			</section>
			<section>
				<button
					className="button"
					type="button"
					onClick={searchRandomPokemon}
				>
					Random Pokemon
				</button>
			</section>
		</form>
	);
}

export default Form;
