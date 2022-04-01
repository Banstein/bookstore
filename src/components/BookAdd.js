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
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book Title" className="bookTitle" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" name="author" placeholder="Book Author" className="bookAuthor" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookAdd;
