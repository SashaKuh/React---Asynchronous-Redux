import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import { FilterForm } from './Filter.styled';

import { selectContacts, selectFilter, selectIsLoading, selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const useContactActions = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return {
    contacts,
    filter,
    dispatch,
    isLoading,
    error,
  };
};

const Filter = () => {
  const { dispatch } = useContactActions();

  const setFilterData = useCallback(
    e => {
      const { value } = e.currentTarget;
      const valueLowerCase = value.toLowerCase();
      dispatch(setFilterValue(valueLowerCase));
    },
    [dispatch]
  );

  return (
    <FilterForm>
      <label htmlFor="find">Find contacts by name:</label>
      <input
        type="text"
        name="find"
        onChange={setFilterData}
      />
    </FilterForm>
  );
};

export default React.memo(Filter);