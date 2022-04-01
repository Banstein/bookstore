const STATUS = 'bookstore/categories/STATUS';

export const status = (status) => ({
  type: STATUS,
  status,
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return [...state, 'Under Construction'];
    default:
      return state;
  }
};

export default categoriesReducer;
