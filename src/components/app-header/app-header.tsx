import React from 'react';
import { Logo, BurgerIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import headerStyles from './app-header.module.css';

export function AppHeader() {
  return (
    <header className={`${headerStyles.header} pb-4 pt-4`}>
      <nav className={headerStyles.menu}>
        <ul className={headerStyles.menuList}>
          <li className={headerStyles.listItem}>
            <NavLink exact to="/" className={`${headerStyles.link} p-5 mr-2`} activeClassName={headerStyles.activeProfileLink}>
              <BurgerIcon type="secondary" />
              <p style={{ color: 'inherit' }} className="text text_type_main-default text_color_inactive ml-2">Конструктор</p>
            </NavLink>
          </li>
          <li className={headerStyles.listItem}>
            <NavLink exact to="/feed" className={`${headerStyles.link} p-5 mr-2`} activeClassName={headerStyles.activeProfileLink}>
              <BurgerIcon type="secondary" />
              <p style={{ color: 'inherit' }} className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={headerStyles.logo}><Logo /></div>

      <div className={headerStyles.profile}>
        <NavLink to="/profile" className={`${headerStyles.link} p-5`} activeClassName={headerStyles.activeProfileLink}>
          <ProfileIcon type="secondary" />
          <p style={{ color: 'inherit' }} className="text text_type_main-default ml-2">Личный кабинет</p>
        </NavLink>
      </div>

    </header>
  );
}
