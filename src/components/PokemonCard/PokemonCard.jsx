import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function PokemonCard({ pokemon, handleModalOpen }) {
	const { name, url } = pokemon;

	const handleClick = (e) => {
		e.preventDefault();
		// hit url
		handleModalOpen(url);
	};

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography variant="h5">{name}</Typography>
				<Button size="small" onClick={handleClick}>
					Conocer más
				</Button>
			</CardContent>
		</Card>
	);
}

PokemonCard.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}).isRequired,
	handleModalOpen: PropTypes.func.isRequired,
};

export default PokemonCard;
