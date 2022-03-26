import React from 'react';
import Proptypes from 'prop-types';
import './styles/Books.css';
import Book from './Book';
import BookAdd from './BookAdd';

function Books(props) {
  const { myBooks } = props;
  return (
    <div className="books">
      <ul>
        {myBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <BookAdd />
    </div>
  );
}

Books.propTypes = {
  myBooks: Proptypes.arrayOf(
    Proptypes.shape({}),
  ).isRequired,
};

export default Books;
