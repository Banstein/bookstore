import React from 'react';
import './Books.css';
import BookAdd from './BookAdd';

function Books() {
  return (
    <div className="books">
      <div className="book-display">
        <div className="left-block">
          <div className="one">
            <h2 className="cat">Action</h2>
            <h3 className="title">The Hunger Games</h3>
            <h4 className="author">s.collins</h4>
            <ul className="interface">
              <li>Comments</li>
              <li>Remove</li>
              <li>Edit</li>
            </ul>
          </div>
          <div className="prog">
            <h4>Completed %</h4>
          </div>
        </div>
        <div className="right-block">
          <h2>CURRENT CHAPTER</h2>
          <h3>Chapter 17</h3>
          <button className="update" type="submit">UPDATE PROGRESS</button>
        </div>
      </div>
      <BookAdd />
    </div>
  );
}

export default Books;
