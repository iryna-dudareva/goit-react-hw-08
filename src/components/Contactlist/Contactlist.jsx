import React from 'react'
import css from './Contactlist.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contacts/selectors'


const Contactlist = () => {

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}

export default Contactlist