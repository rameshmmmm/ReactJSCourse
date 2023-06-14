import { useState } from "react";

function BookEdit({ book, onSubmit }) {
	const [title, setTitle] = useState(book.title);
	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({ id: book.id, title: title });
	};
	return (
		<form className="book-edit" onSubmit={handleSubmit}>
			<label>Title</label>
			<input
				className="input"
				type="text"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<button className="button is-primary">Save</button>
		</form>
	);
}

export default BookEdit;
