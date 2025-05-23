import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/auth/operations'
import { selectUser } from '../../redux/auth/selectors'
import css from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.container}>
      <p className={css.greeting}>Welcome, {user.name}!</p>
      <div className={css.logoutWrapper}>
      <button className={css.logoutBtn} onClick={handleLogout}>
        Log out
      </button>
      </div>
    </div>
  );
};

export default UserMenu
