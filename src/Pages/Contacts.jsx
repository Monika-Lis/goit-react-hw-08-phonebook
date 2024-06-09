import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchContacts } from '../Redux/OperationsAPI';
import { getIsLoading } from '../Redux/Selectors';
import { ContactList } from '../components/ContactList';
import { Input } from '../components/Input';
import { Filter } from '../components/Filter';
import css from '../Styles/Contacts.module.css';
import PropTypes from 'prop-types';

export const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <div className={css.container}>
        <Helmet>
          <title>Your Contacts</title>
        </Helmet>
        <Input />
        <Filter />
        {isLoading && <span className={css.loader}></span>}
        <ContactList />
      </div>
    </HelmetProvider>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
