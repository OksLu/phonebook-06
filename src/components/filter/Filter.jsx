import { CiSearch } from 'react-icons/ci';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';

import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    console.log(e.target.value);
    dispatch(filterContacts(e.target.value));
  };
  return (
    <div className={css.container}>
      <label htmlFor="filter" className={css.label}>
        <CiSearch className={css.searchIcon} /> Find contacts by name
      </label>
      <input
        id="filter"
        className={css.input}
        type="text"
        name="filter"
        autoComplete="off"
        onChange={handleChange}
      />
    </div>
  );
};
