import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import css from './RegistrationPage.module.css'

const RegistrationPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Register</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage
