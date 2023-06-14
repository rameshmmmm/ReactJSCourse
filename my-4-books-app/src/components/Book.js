import { useState } from "react";
import BookEdit from "./BookEdit";

function Book({ book, onDelete, onEdit }) {
	const [isEditMode, setIsEditMode] = useState(false);

	const handleSubmit = (book) => {
		onEdit(book);
		setIsEditMode(false);
	};

	let content;
	if (isEditMode) content = <BookEdit book={book} onSubmit={handleSubmit} />;
	else content = <h3>{book.title}</h3>;
	return (
		<div className="book-show">
			<img alt="book-cover" src={`http://picsum.photos/seed/${book.id}/300/200`} />
			<div>{content}</div>
			<div className="actions">
				<button className="edit" onClick={() => setIsEditMode(!isEditMode)}>
					Edit
				</button>
				<button className="delete" onClick={() => onDelete(book.id)}>
					X
				</button>
			</div>
		</div>
	);
}

export default Book;
