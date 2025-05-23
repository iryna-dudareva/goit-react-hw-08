import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav
