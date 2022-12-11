import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export default function NavBar() {
  const state = useSelector((st) => st);
  console.log(state);
  return (
    <nav className={`${styles.nav}`}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={state.disableTab ? `${styles.cursor_not_allowed}` : ``}>
          <NavLink
            to="/questions"
            className={state.disableTab ? `${styles.navDisabled}` : ``}>
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
