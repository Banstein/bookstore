import React from 'react';
import './styles/Books.css';
import Book from './Book';
import BookAdd from './BookAdd';

const Books = () => (
  <div className="books">
    <Book />
    <BookAdd />
  </div>
);

export default Books;
