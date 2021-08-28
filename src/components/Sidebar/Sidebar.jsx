import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users" activeClassName={style.activeLink}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};
