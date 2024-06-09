import { useDispatch, useSelector } from 'react-redux';
import css from '../Styles/Filter.module.css';
import { getFilter } from '../Redux/Selectors';
import { setFilter } from '../Redux/FilterSlice';
import PropTypes from 'prop-types';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="searchField">Find contacts by name</label>
      <input
        className={css.input}
        id="searchField"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search by name"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
