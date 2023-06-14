import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
	// states
	const [books, setBooks] = useState([]);

	// handlers
	const createBook = (title) => {
		setBooks([...books, { id: books.length + 1, title: title }]);
	};

	const deleteBookById = (idToBeDeleted) => {
		books.filter((book) => {
			return book.id !== idToBeDeleted;
		});
	};

	const editBook = (editedBook) => {
		setBooks(
			books.map((book) => {
				if (book.id === editedBook.id) {
					return { ...book, title: editedBook.title };
				} else return book;
			})
		);
	};

	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList books={books} onDelete={deleteBookById} onEdit={editBook} />
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;
