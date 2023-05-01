import { ContactsForm } from './contactsForm/ContactsForm';
import { ContactsList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';
import css from './App.module.css';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts'));
  // });
  // const [filter, setFilter] = useState('');

  // const addContact = data => {
  //   const newContact = {
  //     id: nanoid(),
  //     ...data,
  //   };
  //   if (contacts.find(contact => contact.name === newContact.name)) {
  //     alert('This contact already exist');
  //   } else {
  //     setContacts(prevState => [...prevState, newContact]);
  //   }
  // };
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = currentId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== currentId)
  //   );
  // };

  // const filterChange = e => {
  //   setFilter(e.target.value.toLowerCase());
  // };

  // const filterContacts = () => {
  //   const filteredContacts = contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter)
  //   );
  //   return filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
  // };

  return (
    <div className={css.container}>
      <h2>Phonebook</h2>
      <ContactsForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactsList />
    </div>
  );
};
