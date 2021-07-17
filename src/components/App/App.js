import React from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { DataContext } from '../../contexts/dataContext';
import {getIngredientsList, REMOVE_SELECTED_INGREDIENT, TOGGLE_ORDER_DETAILS_POPUP} from '../../services/actions/index.js'
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  
  const {selectedIngredient, orderDetails} = useSelector(store => ({
    selectedIngredient: store.index.selectedIngredient,
    orderDetails: store.index.orderDetails
  }))

  React.useEffect(() => {
    dispatch(getIngredientsList())
  }, [dispatch])


  function handleCloseModal() {
    dispatch({type: REMOVE_SELECTED_INGREDIENT})
    dispatch({type: TOGGLE_ORDER_DETAILS_POPUP}) // fix it
  }
    

  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <main className={AppStyles.main}>
        <BurgerIngredients/>
        <BurgerConstructor />
      </main>

      {orderDetails.success && <Modal isOpen={orderDetails.order ? true : false} onClose={handleCloseModal}><OrderDetails /></Modal>}
      {selectedIngredient._id && <Modal isOpen={selectedIngredient ? true : false} onClose={handleCloseModal}><IngredientDetails /></Modal>}
    </div>
  );
}

export default App;
