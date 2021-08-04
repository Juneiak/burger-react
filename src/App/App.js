import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AppStyles from './App.module.css';
import AppHeader from '../components/AppHeader/AppHeader';
import { ConstructorPage } from '../pages';
function App() {
    

  return (
    <BrowserRouter>
      <div className={AppStyles.app}>
        <AppHeader />
          <Switch>

            <Route path='/' exact={true}>
              <ConstructorPage />
            </Route>  

            <Route path='/login' exact={true}>
              
            </Route>

            <Route path='/register' exact={true}>

            </Route>

            <Route path='/forgot-password' exact={true}>

            </Route>

            <Route path='/reset-password' exact={true}>

            </Route>

            <Route path='/feed' exact={true}>

            </Route>

            <Route path='/feed/:id' exact={true}>

            </Route>

            <Route path='/profile' exact={true}>

            </Route>

            <Route path='/profile/orders' exact={true}>

            </Route>

            <Route path='/profile/orders/:id' exact={true}>

            </Route>

            <Route path='/ingredients/:id' exact={true}>

            </Route>

            <Route>

            </Route>

          </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
