import React from 'react';
import { Switch, Route, useLocation, useHistory} from 'react-router-dom';
import AppStyles from './App.module.css';
import AppHeader from '../components/AppHeader/AppHeader';
import ProtectedRoute from "../components/hocs/ProtectedRoute.js";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../services/actions/auth.js';
import IngredientDetails from '../components/IngredientDetails/IngredientDetails';
import Modal from '../components/modals/Modal/Modal';
import {getIngredientsList, REMOVE_SELECTED_INGREDIENT} from '../services/actions/index.js'
import OrderInfoPage from '../pages/orderInfo/OrderInfoPage';

import { 
  ConstructorPage,
  LoginPage,
  RegisterPage,
  ForgotPage,
  ResetPage,
  ProfilePage,
  NotFound404Page,
  IngredientDetailsPage,
  FeedPage } from '../pages';

function App() {

  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const selectedIngredient = useSelector(store => store.index.selectedIngredient)

  React.useEffect(() => {
    dispatch(getIngredientsList())
    dispatch(getUser())
  }, [])

  function handleCloseIngredientModal() {
    dispatch({type: REMOVE_SELECTED_INGREDIENT})
    history.goBack()
  }

  const background = (history.action === "PUSH" || history.action === 'REPLACE') && location?.state?.background

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

            <ProtectedRoute path='/profile'>
              <ProfilePage />
            </ProtectedRoute>

            <Route path='/ingredients/:id' >
              <IngredientDetailsPage />
            </Route>

            <Route exact path='/feed'>
              <FeedPage />
            </Route>

            <Route path='/feed/:id'>
              <OrderInfoPage/>
            </Route>

            <Route >
              <NotFound404Page />
            </Route>
          </Switch>

          { background && selectedIngredient?._id &&
            <Route path={`/ingredients/:id`} >
              <Modal isOpen={selectedIngredient ? true : false} onClose={handleCloseIngredientModal}><IngredientDetails /></Modal>
            </Route>
          }
          
      </div>
  );
}

export default App;
