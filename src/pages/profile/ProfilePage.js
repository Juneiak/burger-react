import React from "react";
import AboutProfile from "../../components/AboutProfile/AboutProfile.js";
import ProfilePageStyles from './ProfilePage.module.css';
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';


function ProfilePage() {

  const {url, path} = useRouteMatch()
  
  return (
    <main className={ProfilePageStyles.main}>
      <nav className={`${ProfilePageStyles.profileNav} mr-15`}>
        <ul className={`${ProfilePageStyles.navList} mb-20`}>
          <li>
            <Link to={`${url}`} className={`${ProfilePageStyles.link} text text_type_main-medium text_color_inactive`}>Профиль</Link>
          </li>
          <li>
            <Link to={`${url}/:orders`} className={`${ProfilePageStyles.link} text text_type_main-medium text_color_inactive`}>История заказов</Link>
          </li>
          <li>
            <Link to='' className={`${ProfilePageStyles.link} text text_type_main-medium text_color_inactive`}>Выход</Link>
          </li>
        </ul>

        <p className='text text_type_main-default text_color_inactive'>В этом разделе вы можете изменить свои персональные данные</p>
      </nav>
      <section>
        <Switch>
          <Route path={path}>
            <AboutProfile />
          </Route>
          <Route path='/orders'>
            
          </Route>
        </Switch>
      </section>

    </main>
  )
}

export default ProfilePage;