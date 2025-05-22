import React from 'react'
import css from './SearchBox.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'


const SearchBox = () => {

  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };



  return (
    <div className={css.searchbar}>
      <label className={css.sbLabel} >
        Find contacts by name: 
        <input className={css.sbInput} type="text" value={filter} onChange={handleChange} />
        </label>
    </div>
  )
}

export default SearchBox