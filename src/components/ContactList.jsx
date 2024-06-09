import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../Redux/Selectors';
import { deleteContact } from '../Redux/OperationsAPI';
import css from '../Styles/Contacts.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {filteredContacts.map(contact => (
          <tr className={css.trBody} key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td className={css.tdButton}>
              <button
                className={css.button}
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
