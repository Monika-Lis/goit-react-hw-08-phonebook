import React from 'react';
import { Suspense } from 'react';
import css from '../Styles/Lauout.module.css';
import { Loader } from './Loader';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div className={css.div}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
