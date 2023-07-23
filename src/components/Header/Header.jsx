import { Link, NavLink } from 'react-router-dom';

import styles from "./Header.module.css";

export const Header = () => {
   return (
      <div className={styles.header}>
         <div className={styles.title}>
            <i>«Куда-нибудь ты обязательно попадёшь, &mdash; сказал Кот, &mdash; надо только достаточно долго идти»</i>
         </div>
         <div className={styles.links}>
            <NavLink
               to={{ pathname: `/` }}
               className={({ isActive }) => isActive ? `${styles.link} ${styles.link_active}` : `${styles.link} text_color_inactive`}>
               в начало
            </NavLink>
            |
            <NavLink
               to={{ pathname: `/map` }}
               className={({ isActive }) => isActive ? `${styles.link} ${styles.link_active}` : `${styles.link} text_color_inactive`}>
               карта
            </NavLink>
            |
            <NavLink
               to={{ pathname: `/tracks` }}
               className={({ isActive }) => isActive ? `${styles.link} ${styles.link_active}` : `${styles.link} text_color_inactive`}>
               треки
            </NavLink>
            |
            <NavLink
               to={{ pathname: `/cities` }}
               className={({ isActive }) => isActive ? `${styles.link} ${styles.link_active}` : `${styles.link} text_color_inactive`}>
               города
            </NavLink>
         </div>
      </div>
   )
}