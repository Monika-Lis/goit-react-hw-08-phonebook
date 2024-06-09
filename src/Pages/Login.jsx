import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/OperationsAPI';
import css from '../Styles/Login.module.css';

export const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      loginUser({
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
          <title>Login</title>
        </Helmet>
        <form className={css.form} onSubmit={handleLogin} autoComplete="off">
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
            Log in
          </button>
        </form>
      </div>
    </HelmetProvider>
  );
};
