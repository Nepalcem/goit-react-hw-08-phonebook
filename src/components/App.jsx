import React, { lazy, useEffect } from 'react';
import { SharedHeaderLayout } from './pages/sharedHeaderLayout/sharedHeaderLayout';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/authorize/operations';
import { useAuthorize } from './hooks/useAuthorize';
import { RestrictedRoute } from './routes/RestrictedRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('./pages/Home/Home'));
const RegisterPage = lazy(() => import('./pages/registerPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuthorize();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <ToastContainer autoClose={5000} theme="colored" />
        <Routes>
          <Route path="/" element={<SharedHeaderLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>
    )
  );
};

export default App;
