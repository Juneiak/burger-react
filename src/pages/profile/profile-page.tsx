import React from 'react';
import {
  NavLink,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { AboutProfile } from '../../components/about-profile/about-profile';
import ProfilePageStyles from './profile-page.module.css';
import { useDispatch } from '../../services/hooks';
import { logout } from '../../services/actions/auth';
import { OrderHistory } from '../../components/order-history/order-history';

export function ProfilePage() {
  const { url, path } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  function onExitClick() {
    dispatch(logout());
    history.push('/');
  }

  return (
    <main className={ProfilePageStyles.main}>
      <nav className={`${ProfilePageStyles.profileNav} mr-15`}>
        <ul className={`${ProfilePageStyles.navList} mb-20`}>
          <li>
            <NavLink exact to={`${url}`} activeClassName={ProfilePageStyles.activeLink} className={`${ProfilePageStyles.link} text text_type_main-medium text_color_inactive`}>Профиль</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/orders`} activeClassName={ProfilePageStyles.activeLink} className={`${ProfilePageStyles.link} text text_type_main-medium text_color_inactive`}>История заказов</NavLink>
          </li>
          <li>
            <button onClick={onExitClick} className={`${ProfilePageStyles.exictButton} text text_type_main-medium text_color_inactive`}>Выход</button>
          </li>
        </ul>

        <p className="text text_type_main-default text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
      </nav>
      <section className={ProfilePageStyles.routeSide}>
        <Switch>
          <Route exact path={path}>
            <AboutProfile />
          </Route>
          <Route exact path={`${path}/orders`}>
            <OrderHistory />
          </Route>
        </Switch>
      </section>

    </main>
  );
}
