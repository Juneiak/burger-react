import BurgerConstructorStyles from './BurgerConstructor.module.css';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Burger from './Burger';
import { getOrderDetails } from '../../services/actions/index.js';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';

function BurgerConstructor() {

  const [total, setTotal] = React.useState(0)

  const dispatch = useDispatch()
  const {constructorList, selectedBun} = useSelector(store => ({
    constructorList: store.index.constructorList,
    selectedBun: store.index.selectedBun
  }))

  React.useEffect(() => {
    const bunPrice = selectedBun.price ? selectedBun.price * 2 : 0
    setTotal(constructorList.reduce((prevValue, item) => prevValue + item.price, bunPrice))
  }, [constructorList, selectedBun])


  function handleOrderClick() {
    if (constructorList.length !== 0 && selectedBun._id) {
      const order = constructorList.map(ingredient => ingredient._id)
      order.push(selectedBun._id)

      dispatch(getOrderDetails(order))
    } else {
      console.error('Не выбраны ингредиенты!');
    }
  }

  return(
    <section className={`${BurgerConstructorStyles.burgerConstructor} pt-25`}>
      
      <Burger />
 
      <div className={`${BurgerConstructorStyles.confirmButton} mr-4`}>
        <div className={`${BurgerConstructorStyles.total} mr-10 `}>
          <p className="text text_type_digits-medium mr-2">{total}</p>
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