import React, { lazy, useEffect } from 'react';
import { SharedHeaderLayout } from './pages/sharedHeaderLayout/sharedHeaderLayout';
import Home from './pages/Home';
// import Form from './Form/Form';
// import ContactsList from './contactsList/ContactsList';
// import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { filterItems } from 'redux/slices/filterSlice';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getFilter, getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'api-functions/api';

const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));


const App = () => {
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const errorMessage = useSelector(getError);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterItems(e.currentTarget.value.trim()));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedHeaderLayout />}>
        <Route index element={<HomePage />} />
        <Route path='register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/contacts' element={<ContactsPage/>} />
        {/* <Form></Form>
      <Filter value={filter} onChange={changeFilter}></Filter>
      {isLoading && !errorMessage && <b>Request in progress...</b>}
      <ContactsList></ContactsList> */}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
