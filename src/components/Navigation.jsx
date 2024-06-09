import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Styles/Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.container}>
      <NavLink
        to="/register"
        className={navData => (navData.isActive ? css.active : css.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={navData => (navData.isActive ? css.active : css.link)}
      >
        Log In
      </NavLink>
    </nav>
  );
};
