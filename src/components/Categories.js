import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { status } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.categoriesReducer);
  return (
    <div>
      <button type="button" className="update" onClick={() => dispatch(status())}>
        Check Status
      </button>
      {stats}
    </div>
  );
}

export default Categories;
