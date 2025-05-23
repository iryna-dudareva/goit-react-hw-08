import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import Contactlist from '../../components/Contactlist/Contactlist'
import { getContacts } from '../../redux/contacts/operations'
import { selectLoading, selectError } from '../../redux/contacts/selectors'
import css from './ContactsPage.module.css'

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>My Contacts</h2>
      <ContactForm />
      <SearchBox />
      {loading && <p className={css.loading}>Loading...</p>}
      {error && <p className={css.error}>Error: {error}</p>}
      <Contactlist />
    </div>
  );
};

export default ContactsPage