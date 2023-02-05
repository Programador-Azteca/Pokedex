import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';

function SearchBar({
	handleSearchClick,
	searchTerm,
	handleOnChangeSearchTerm,
	handleCancelSearch,
}) {
	return (
		<form>
			<Input
				id="search-bar"
				className="text"
				onChange={handleOnChangeSearchTerm}
				label="Buscar pokemon"
				variant="outlined"
				placeholder="Buscar..."
				size="small"
				value={searchTerm}
			/>
			<IconButton aria-label="clear" onClick={handleSearchClick}>
				<SearchIcon style={{ fill: 'blue' }} />
			</IconButton>
			<IconButton aria-label="clear" onClick={handleCancelSearch}>
				<HighlightOffIcon style={{ fill: 'blue' }} />
			</IconButton>
		</form>
	);
}

SearchBar.propTypes = {
	handleSearchClick: PropTypes.func.isRequired,
	handleOnChangeSearchTerm: PropTypes.func.isRequired,
	handleCancelSearch: PropTypes.func.isRequired,
	searchTerm: PropTypes.string.isRequired,
};

export default SearchBar;
