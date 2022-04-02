import React from 'react';
import './styles/Books.css';
import BookAdd from './BookAdd';
import Book from './Book';

const Books = () => (
  <div className="books">
    <Book />
    <hr />
    <BookAdd />
  </div>
);

export default Books;
