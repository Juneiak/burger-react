import BurgerConstructorStyles from './BurgerConstructor.module.css';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Burger from './Burger';
import { getOrderDetails, TOGGLE_ORDER_DETAILS_POPUP } from '../../services/actions/index.js';
import {useDispatch} from 'react-redux';

function BurgerConstructor() {

  const dispatch = useDispatch()

  function handleOrderClick() {
    const order = ["60d3b41abdacab0026a733c6","60d3b41abdacab0026a733c6","60d3b41abdacab0026a733cc","60d3b41abdacab0026a733ce","60d3b41abdacab0026a733cf","60d3b41abdacab0026a733c8","60d3b41abdacab0026a733c9"]
    dispatch(getOrderDetails(order))
  }

  return(
    <section className={`${BurgerConstructorStyles.burgerConstructor} pt-25`}>
      
      <Burger />
 
      <div className={`${BurgerConstructorStyles.confirmButton} mr-4`}>
        <div className={`${BurgerConstructorStyles.total} mr-10 `}>
          <p className="text text_type_digits-medium mr-2">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={handleOrderClick} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor;