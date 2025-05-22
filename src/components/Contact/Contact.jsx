import React from 'react'
import css from './Contact.module.css'
import { FaUserAlt } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsOps'

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  
  return (
    <div className={css.contactWrapper}>
      <div className={css.textWrapper}>
        <div className={css.itWrapper}>
          <FaUserAlt className={css.icon}/>
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.itWrapper}>
          <FaPhone className={css.icon}/>
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Contact