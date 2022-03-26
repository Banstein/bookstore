import React from 'react';
import './styles/BookAdd.css';

function BookAdd() {
  return (
    <div className="book-add">
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Category" />
      <button type="submit">ADD BOOK</button>
    </div>
  );
}

export default BookAdd;
