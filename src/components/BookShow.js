import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit, onSubmit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  // toggle to the opposite of what it is now
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  // let allows us change variable over time
  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book} />;
  }

  // clicking on picture icon will change what we see (state)
  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
