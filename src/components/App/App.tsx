import React from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import data from '../../utils/data.js';

function App() {
  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <main className={AppStyles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </main>
      
    </div>
  );
}

export default App;
