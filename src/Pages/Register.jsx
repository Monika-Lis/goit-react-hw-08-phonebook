import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Redux/OperationsAPI';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from '../Styles/Register.module.css';

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
          <div className={css.wrap}>
            <label className={css.label}>Name</label>
            <input className={css.input} type="text" name="name" required />
          </div>
          <div className={css.wrap}>
            <label className={css.label}>Email</label>
            <input className={css.input} type="email" name="email" required />
          </div>
          <div className={css.wrap}>
            <label className={css.label}>Password</label>
            <input
              className={css.input}
              type="password"
              name="password"
              required
            />
          </div>
          <button className={css.button} type="submit">
            Register
          </button>
        </form>
      </div>
    </HelmetProvider>
  );
};
