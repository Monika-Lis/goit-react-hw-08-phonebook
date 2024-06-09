import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from '../Redux/OperationsAPI';
import { getContacts } from '../Redux/Selectors';
import css from '../Styles/Input.module.css';

export const Input = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleAddName = event => setName(event.target.value);
  const handleAddNumber = event => setNumber(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    const isPresent = contacts.some(
      contact => contact.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (isPresent) {
      Notiflix.Notify.warning('This contact already exists!');
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div className={css.div}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="nameField">
          Name
        </label>
        <input
          className={css.input}
          id="nameField"
          type="text"
          value={name}
          onChange={handleAddName}
          placeholder="Name"
          required
        />
        <label className={css.label} htmlFor="NumberField">
          Number
        </label>
        <input
          className={css.input}
          id="NumberField"
          type="tel"
          value={number}
          onChange={handleAddNumber}
          placeholder="Phone Number"
          pattern="\+?\d{1,4}?[ .\\-\\s]?\(?\d{1,3}?\)?[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,9}"
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
