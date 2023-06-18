import axios from "axios";

const IMAGE_SEARCH_URL =
	"https://api.unsplash.com/search/photos";

const searchImages = async (setImages, searchTerm) => {
	const response = await axios.get(IMAGE_SEARCH_URL, {
		headers: {
			Authorization:
				"Client-ID Y9LRot16RQQUiDI0eGNA8QtMcQ3XgjEVDAYT612Nnu4",
		},
		params: {
			query: searchTerm,
		},
	});
	console.log(response.data.results);
	setImages(response.data.results);
};

export default searchImages;
