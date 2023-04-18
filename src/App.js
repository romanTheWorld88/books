import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  // we are going to be updating state that is an array
  const [books, setBooks] = useState([]);


  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id){
        return { ...book, title: newTitle};
      }

      return book;

    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    // keeps the true, removes false
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  // handle submission of title
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList onEdit = {editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
