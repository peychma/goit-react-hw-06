import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <p className={css.paragraf}>Find contacts by name</p>
      <input 
        className={css.searchname} 
        type="text" 
        placeholder="Search..."
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;

