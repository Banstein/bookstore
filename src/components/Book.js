import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  if (books !== []) {
    return (
      <>
        {books.map((book) => (
          <div className="book" key={book.id}>
            <div className="left-block">
              <div className="one">
                <h2 className="category">category</h2>
                <h3 className="title">{book.title}</h3>
                <h4 className="author">{book.author}</h4>
                <ul className="interface">
                  <li>comment</li>
                  <li><button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button></li>
                  <li>edit</li>
                </ul>
              </div>
              <div className="prog">
                <h4>Completed %</h4>
              </div>
            </div>
            <div className="right-block">
              <h2 className="cur-chapter">currentChapter</h2>
              <h3 className="chapter">chapter</h3>
              <button type="button" className="update" id={book.id}>updateProgress</button>
            </div>
          </div>
        ))}
      </>
    );
  }
  return (<h2>Add new book</h2>);
};

export default Book;
