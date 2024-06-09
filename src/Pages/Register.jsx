import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Redux/OperationsAPI';
import css from '../Styles/Register.module.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <HelmetProvider>
      <div className={css.div}>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <form className={css.form} onSubmit={handleRegister} autoComplete="off">
          <label className={css.label}>Name</label>
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <label className={css.label}>Email</label>
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <label className={css.label}>Password</label>
          <input
            className={css.input}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className={css.button} type="submit">
            Register
          </button>
        </form>
      </div>
    </HelmetProvider>
  );
};
