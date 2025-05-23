import React from 'react'
import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Your Contact Book</h1>
      <p className={css.description}>
        Manage your contacts easily with registration and login functionality.
      </p>
    </div>
  );
};

export default HomePage
