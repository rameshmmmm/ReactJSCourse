import { useState } from "react";
import "./SearchBar.scss";
import PropTypes from "prop-types";

function SearchBar({ onSubmit }) {
	const [searchTxt, setSearchTxt] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submit function logging:", onSubmit);
		onSubmit(searchTxt);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="search-box">
				<button className="btn-search">
					<i className="fas fa-search"></i>
				</button>
				<input
					className="input-search is-primary"
					type="text"
					placeholder="Type to Search..."
					value={searchTxt}
					onChange={(event) => setSearchTxt(event.target.value)}
				/>
			</div>
		</form>
	);
}

SearchBar.propTypes = {
	onSubmit: PropTypes.func,
};

export default SearchBar;
