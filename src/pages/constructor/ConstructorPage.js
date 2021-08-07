import React from 'react';
import ConstructorPageStyles from './ConstructorPage.module.css';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';
import Modal from '../../components/Modal/Modal';
import {getIngredientsList, REMOVE_SELECTED_INGREDIENT, CLEAR_ORDER_DETAILS} from '../../services/actions/index.js'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, useLocation, Route, useRouteMatch} from 'react-router-dom';

function ConstructorPage() {

  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const { path } = useRouteMatch(); 
  const {selectedIngredient, orderDetails} = useSelector(store => ({
    selectedIngredient: store.index.selectedIngredient,
    orderDetails: store.index.orderDetails
  }))

  React.useEffect(() => {
    dispatch(getIngredientsList())
    dispatch({type: REMOVE_SELECTED_INGREDIENT})
  }, [])


  function handleCloseModal() {
    dispatch({type: CLEAR_ORDER_DETAILS})
  }

  function handleCloseIngredientModal() {
    dispatch({type: REMOVE_SELECTED_INGREDIENT})
    history.goBack()
  }
  
  const background = location?.state?.background

  return (
    <>
      <main className={ConstructorPageStyles.main}>
        <BurgerIngredients/>
        <BurgerConstructor />
      </main>

      {orderDetails.success && <Modal isOpen={orderDetails.success ? true : false} onClose={handleCloseModal}><OrderDetails /></Modal>}
      { selectedIngredient?._id &&
        // <Route path={`/ingredients/:id`} >
          <Modal isOpen={selectedIngredient ? true : false} onClose={handleCloseIngredientModal}><IngredientDetails /></Modal>
        // </Route>
      }
    </>
  );
}

export default ConstructorPage;
