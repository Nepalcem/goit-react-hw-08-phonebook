import React from 'react';
// import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterItems } from 'redux/slices/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(filterItems(e.currentTarget.value.trim()));
  };
  return (
    <FilterStyled>
      <label>
        Filter by name:
        <input
          className="filter-input"
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </FilterStyled>
  );
};

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
