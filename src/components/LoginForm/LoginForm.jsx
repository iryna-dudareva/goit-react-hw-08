import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import css from './LoginForm.module.css'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth/operations'

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too short!').required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Log in</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage className={css.error} name="email" component="div" />
          </label>

          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
            <ErrorMessage className={css.error} name="password" component="div" />
          </label>

          <button className={css.button} type="submit">
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm
