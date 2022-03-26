import React from 'react';
import Proptypes from 'prop-types';

function Book(props) {
  const { book } = props;
  const {
    category, title, author,
    comment, remove, edit,
    currentChapter, chapter, updateProgress,
  } = book;
  return (
    <div className="book">
      <div className="left-block">
        <div className="one">
          <h2 className="category">{category}</h2>
          <h3 className="title">{title}</h3>
          <h4 className="author">{author}</h4>
          <ul className="interface">
            <li>{comment}</li>
            <li>{remove}</li>
            <li>{edit}</li>
          </ul>
        </div>
        <div className="prog">
          <h4>Completed %</h4>
        </div>
      </div>
      <div className="right-block">
        <h2 className="cur-chapter">{currentChapter}</h2>
        <h3 className="chapter">{chapter}</h3>
        <button className="update" type="submit">{updateProgress}</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: Proptypes.shape({
    category: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    author: Proptypes.string.isRequired,
    comment: Proptypes.string.isRequired,
    remove: Proptypes.string.isRequired,
    edit: Proptypes.string.isRequired,
    currentChapter: Proptypes.string.isRequired,
    chapter: Proptypes.string.isRequired,
    updateProgress: Proptypes.string.isRequired,

  }).isRequired,
};

export default Book;
