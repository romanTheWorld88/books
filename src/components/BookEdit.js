import {useState} from 'react';


//bookEdit documentation

// book -> an object with an id and title
// onEdit -> function thats called when user submits a form
// onSubmit -> function thats called when user submits a form


  function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
      setTitle(event.target.value);
    };

    // keep track of enter key / submission:
    const handleSubmit = (event) => {
      event.preventDefault();

      // when we call onSubmit, it will run handleSubmit, passing up id and title
      onSubmit(book.id, title);
    };

    return (
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary">Save</button>
      </form>
    );
  }

export default BookEdit;
