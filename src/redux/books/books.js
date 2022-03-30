export const ADD_BOOK = 'addBook';
export const REMOVE_BOOK = 'removeBook';

const INITIAL_STATE = [];

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export default booksReducer;
