import React from "react";
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./AppHeader.module.css";

function AppHeader() {

  return (
    <header className={`${headerStyles.header} pb-4 pt-4`}>
      <nav className={headerStyles.menu}>
        <ul className={headerStyles.menuList}>
          <li className={headerStyles.listItem}>
            <a className={`${headerStyles.link} p-5 mr-2`} href="#" target="_self">
              <BurgerIcon type={"primary"} />
              <p className="text text_type_main-default ml-2">Конструктор</p>
            </a>
          </li>
          <li className={headerStyles.listItem}>
            <a className={`${headerStyles.link} p-5`} href="#" target="_self">
              <ListIcon type={"secondary"} />
              <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
            </a>
          </li>
        </ul>
      </nav>
      <div className={headerStyles.logo}><Logo /></div>
      
      <div className={headerStyles.profile}>
        <a className={`${headerStyles.link} p-5`} href="#" target="_self">
          <ProfileIcon type={"secondary"} />
          <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</p>
        </a>
      </div>
      
    </header>
    
  )
  
};

export default AppHeader;