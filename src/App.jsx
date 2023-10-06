import React, { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Title, Loader } from 'App.styled';

import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import MemoizedContactList from './components/ContactsList/ContactsList';
import { useContactActions } from './components/Filter/Filter';

export default function App() {
  const { dispatch, filter, contacts, isLoading, error } = useContactActions();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Title>Phonebook</Title>

      <Form />

      {isLoading && !error && (
        <Loader>
          <div>Loading...</div>
        </Loader>
      )}

      {!isLoading && error && <div>Error</div>}

      {contacts.length > 1 || filter !== '' ? <Filter /> : null}
      {contacts.length > 0 && (
        <MemoizedContactList />
      )}
    </div>
  );
}
