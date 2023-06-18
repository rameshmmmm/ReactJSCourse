import PropTypes from "prop-types";

function Image({ image }) {
	return (
		<img src={image.urls.regular} alt={image.alt_description} />
	);
}

Image.propTypes = {
	image: PropTypes.object,
};

export default Image;
