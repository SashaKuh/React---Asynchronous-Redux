import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useContactActions } from '../Filter/Filter';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import { ContactListStyled, ListElement, Btn } from './ContactsList.styled';

const MemoizedContactList = React.memo(() => {
  const { dispatch } = useContactActions();
  const contactsRedux = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    return contactsRedux.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }, [contactsRedux, filterValue]);

  return (
    <>
      <ContactListStyled>
      {filteredContacts.map(({ name, phone, id }) => {
        return (
          <ListElement key={id}>
            {name} - {phone}
            <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Btn>
          </ListElement>
        );
      })}
      </ContactListStyled>
    </>
  );
});

export default MemoizedContactList;
