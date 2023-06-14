import { useState } from "react";
function BookCreate({ onCreate }) {
	const [title, setTitle] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onCreate(title);
		setTitle("");
	};

	return (
		<div className="book-create">
			<h3>Add a Book</h3>
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input
					className="input"
					type="text"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<button className="button">Create! Explore!</button>
			</form>
		</div>
	);
}

export default BookCreate;
