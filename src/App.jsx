import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import AppBar from './components/AppBar/AppBar'
import Navigation from './components/Navigation/Navigation'
import AuthNav from './components/AuthNav/AuthNav'
import UserMenu from './components/UserMenu/UserMenu'

import HomePage from './pages/HomePage/HomePage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'

import { refreshUser } from './redux/auth/operations'
import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors'

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <div className="container">
      <AppBar />

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              !isLoggedIn ? <RegistrationPage /> : <Navigate to="/contacts" />
            }
          />
          <Route
            path="/login"
            element={!isLoggedIn ? <LoginPage /> : <Navigate to="/contacts" />}
          />
          <Route
            path="/contacts"
            element={isLoggedIn ? <ContactsPage /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
    </>
  );
};

export default App

