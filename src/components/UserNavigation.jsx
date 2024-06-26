import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from '../Styles/UserNavigation.module.css';

export const UserNavigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={navData => (navData.isActive ? css.active : css.link)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={navData => (navData.isActive ? css.active : css.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
