import { Contact } from 'components/contactEl/Contact';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <Contact currentId={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};
