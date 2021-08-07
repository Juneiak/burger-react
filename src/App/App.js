import React from 'react';
import { Switch, Route, useLocation} from 'react-router-dom';
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
  ProfilePage,
  NotFound404Page,
  IngredientDetailsPage } from '../pages';

function App() {

  const dispatch = useDispatch()
  const location = useLocation()

  React.useEffect(() => {
    dispatch(getUser())
  }, [])

  const background = location?.state?.background

  return (
      <div className={AppStyles.app}>
        <AppHeader />
          <Switch location={background || location}>

            <Route path='/' exact>
              <ConstructorPage />
            </Route>  

            <Route path='/login' exact>
              <LoginPage />
            </Route>

            <Route path='/register' exact>
              <RegisterPage />
            </Route>

            <Route path='/forgot-password' exact>
              <ForgotPage />
            </Route>

            <Route path='/reset-password' exact>
              <ResetPage />
            </Route>

            <ProtectedRoute path='/profile' exact>
              <ProfilePage />
            </ProtectedRoute>

            {!background && 
            <Route path='/ingredients/:id' >
              <IngredientDetailsPage />
            </Route>}

            <Route >
              <NotFound404Page />
            </Route>
          </Switch>
          
      </div>
  );
}

export default App;
