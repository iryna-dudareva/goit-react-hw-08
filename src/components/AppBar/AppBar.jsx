import React from 'react'
import css from './AppBar.module.css'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu/UserMenu'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.left}>
        <Navigation />
      </div>
      <div className={css.right}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar
