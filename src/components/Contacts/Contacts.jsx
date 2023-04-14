import { ContactList } from './Contacts.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
//import { useEffect } from 'react';
import { useMemo } from 'react';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.length > 0
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
        )
      : [];
  };

  const visibleContacts = useMemo(getFilteredContacts, [filterValue, contacts]);

  if (visibleContacts.length > 0) {
    return (
      <ContactList>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" name="delete" id={id} onClick={handleClick}>
              Delete
            </button>
          </li>
        ))}
      </ContactList>
    );
  } else {
    return <></>;
  }
};
