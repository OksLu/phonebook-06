import { addContact } from 'redux/contactsSlice';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'redux/selectors';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newContact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert('This contact already exist');
    } else {
      dispatch(addContact(newContact));
    }

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input
        id="name"
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
      />
      <label className={css.label} htmlFor="number">
        Number
      </label>
      <input
        id="number"
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        autoComplete="off"
      />
      <button className={css.addButton} type="submit">
        Add
      </button>
    </form>
  );
};
