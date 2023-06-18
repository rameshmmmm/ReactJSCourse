import Image from "./Image";
import PropTypes from "prop-types";
import "./ImageList.scss";
function ImageList({ images }) {
	console.log(
		"------------------ImageList------------------",
		images
	);
	const imageElements = images.map((image) => {
		return <Image key={image.id} image={image} />;
	});
	return <div className="images-list">{imageElements}</div>;
}

ImageList.propTypes = {
	images: PropTypes.array,
};

export default ImageList;
