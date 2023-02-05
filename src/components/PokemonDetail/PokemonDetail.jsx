import React from 'react';
import { List, ListItemText, Divider } from '@mui/material';
import PropTypes from 'prop-types';

function PokemonDetail({ selectedPokemon }) {
	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<h1>
					{selectedPokemon.id}. {selectedPokemon.name.toUpperCase()}
				</h1>
			}
		>
			<ListItemText>
				<h3>Altura: {selectedPokemon.height}</h3>
			</ListItemText>
			<Divider />
			<ListItemText>
				<h3>Peso: {selectedPokemon.weight}</h3>
			</ListItemText>
			<Divider />
			<ListItemText>
				<h3>Experiencia base: {selectedPokemon.base_experience}</h3>
			</ListItemText>
			<Divider />
			<List component="div">
				<ListItemText>
					<h3>Formas:</h3>
				</ListItemText>
				{selectedPokemon.forms.map((value) => (
					<ListItemText key={`${value.name}-${selectedPokemon.name}`}>
						<h4>{value.name}</h4>
					</ListItemText>
				))}
			</List>
			<Divider />
			<List component="div">
				<ListItemText>
					<h3>Habilidades:</h3>
				</ListItemText>
				{selectedPokemon.abilities.map((value) => (
					<ListItemText key={`${value.ability.name}-${selectedPokemon.name}`}>
						<h4>{value.ability.name}</h4>
					</ListItemText>
				))}
			</List>
			<Divider />
			<List component="div">
				<ListItemText>
					<h3>Estadísticas:</h3>
				</ListItemText>
				{selectedPokemon.stats.map((value) => (
					<ListItemText key={`${value.stat.name}-${selectedPokemon.name}`}>
						<h4>{`${value.stat.name}: ${value.base_stat}`}</h4>
					</ListItemText>
				))}
			</List>
		</List>
	);
}
PokemonDetail.propTypes = {
	selectedPokemon: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		height: PropTypes.number.isRequired,
		weight: PropTypes.number.isRequired,
		base_experience: PropTypes.number.isRequired,
		abilities: PropTypes.arrayOf(
			PropTypes.shape({
				ability: PropTypes.shape({
					name: PropTypes.string.isRequired,
				}).isRequired,
			})
		).isRequired,
		stats: PropTypes.arrayOf(
			PropTypes.shape({
				stat: PropTypes.shape({
					name: PropTypes.string.isRequired,
					base_stat: PropTypes.number.isRequired,
				}).isRequired,
			})
		).isRequired,
		forms: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
};

export default PokemonDetail;
