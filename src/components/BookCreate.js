import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  // event handler to keep track of when text input changed in any way
  // event.target.value is what they just typed
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // handle when submission made
  const handleSubmit = (event) =>{
    event.preventDefault();
    onCreate(title);
    setTitle('');

  };
  return (
    <div className="book-create">
        <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className ="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
