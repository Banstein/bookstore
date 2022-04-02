import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './styles/BookAdd.css';

const BookAdd = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.floor(Math.random() * 15),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <div className="book-add">
      <h1 className="add">ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book Title" className="book-title" value={title} onChange={(e) => setTitle(e.target.value)} required maxLength="60" />
        <input type="text" name="author" placeholder="Book Author" className="book-author" value={author} onChange={(e) => setAuthor(e.target.value)} required maxLength="40" />
        <button type="submit" className="btn-add">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookAdd;
