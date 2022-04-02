import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const percentage = 66;
  if (books !== []) {
    return (
      <>
        {books.map((book) => (
          <div className="book" key={book.id}>
            <div className="left-block">
              <div className="one">
                <h2 className="category">Category</h2>
                <h3 className="title">{book.title}</h3>
                <h4 className="author">{book.author}</h4>
                <ul className="interface">
                  <li>Comment</li>
                  <li><button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button></li>
                  <li>Edit</li>
                </ul>
              </div>
              <div className="prog">
                <div className="precent">
                  <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </div>
                <div>
                  <div className="number">{`${percentage}%`}</div>
                  <div className="real">Completed</div>
                </div>
              </div>
            </div>
            <div className="right-block">
              <h2 className="cur-chapter">CURRENT CHAPTER</h2>
              <h3 className="chapter">Chapter 12</h3>
              <button type="button" className="update" id={book.id}>Update Progress</button>
            </div>
          </div>
        ))}
      </>
    );
  }
  return (<h2>Add new book</h2>);
};

export default Book;
