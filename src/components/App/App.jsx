//import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Contacts/Filter/Filter';

export const App = () => {
  //const [contacts, setContacts] = useState(() => {
  //return JSON.parse(localStorage.getItem('contacts')) ?? [];
  //});
  // const [filter, setFilter] = useState('');

  /* useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);*/

  /*const formSubmitHandler = data => {
    contacts.find(({ name }) => name === data.name)
      ? alert(`${data.name} is already in contacts!`)
      : setContacts([data, ...contacts]);
  };*/

  /* const handleFilterChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts !== null
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
        )
      : [];
  };

  const deleteContact = ({ target: { name, id } }) => {
    if (name === 'delete') {
      setContacts(contacts.filter(contact => contact.id !== id));
    }
  };

  const visibleContacts = useMemo(getFilteredContacts, [filter, contacts]);*/

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
