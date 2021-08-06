import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AppStyles from './App.module.css';
import AppHeader from '../components/AppHeader/AppHeader';
import ProtectedRoute from "../components/hocs/ProtectedRoute.js";
import { useDispatch } from 'react-redux';
import { getUser } from '../services/actions/auth.js';
import { 
  ConstructorPage,
  LoginPage,
  RegisterPage,
  ForgotPage,
  ResetPage,
  ProfilePage } from '../pages';

function App() {

  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <BrowserRouter>
      <div className={AppStyles.app}>
        <AppHeader />
          <Switch>

            <Route path='/' exact={true}>
              <ConstructorPage />
            </Route>  

            <Route path='/login' exact={true}>
              <LoginPage />
            </Route>

            <Route path='/register' exact={true}>
              <RegisterPage />
            </Route>

            <Route path='/forgot-password' exact={true}>
              <ForgotPage />
            </Route>

            <Route path='/reset-password' exact={true}>
              <ResetPage />
            </Route>

            <ProtectedRoute path='/profile'>
              <ProfilePage />
            </ProtectedRoute>

          </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
