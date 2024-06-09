import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/OperationsAPI';
import css from '../Styles/UserLogout.module.css';
import { useAuth } from 'hooks/useAuth';

export const UserLogout = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={css.userMenu}>
      <h2>{user.name}</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};
