import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import "./App.scss";
import { useState } from "react";

function App() {
	const [images, setImages] = useState([]);

	return (
		<div className="app">
			<SearchBar onSubmit={searchImages.bind(this, setImages)} />
			<ImageList images={images} />
		</div>
	);
}

export default App;
