import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from '../Redux/OperationsAPI';
import { Loader } from './Loader';

const LoginSection = lazy(() =>
  import('../Pages/Login').then(module => ({ default: module.Login }))
);
const RegisterSection = lazy(() =>
  import('../Pages/Register').then(module => ({ default: module.Register }))
);
const ContactsSection = lazy(() =>
  import('../Pages/Contacts').then(module => ({ default: module.Contacts }))
);
const HomeSection = lazy(() =>
  import('../Pages/Home').then(module => ({ default: module.Home }))
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeSection />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <RegisterSection />
              </RestrictedRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <LoginSection />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsSection />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
