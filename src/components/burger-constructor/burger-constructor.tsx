import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import BurgerConstructorStyles from './burger-constructor.module.css';
import { Burger } from './burger';
import { getOrderDetails } from '../../services/actions/order';
import { useDispatch, useSelector } from '../../services/hooks';
import { TIngredient } from '../../services/types/data/index';

export function BurgerConstructor() {
  const [total, setTotal] = React.useState<number>(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const user = useSelector((store) => store.auth.user);
  const selectedBun: any = useSelector((store) => store.index.selectedBun);
  const constructorList: any = useSelector((store) => store.index.constructorList);
   
  React.useEffect(() => {
      const bunPrice: number = selectedBun.price ? selectedBun.price * 2 : 0;
      setTotal(constructorList.reduce((prevValue: number, item: TIngredient) => prevValue + item.price, bunPrice));
    
  }, [constructorList, selectedBun]);

  function handleOrderClick() {
    if (constructorList.length !== 0 && selectedBun._id) {
      const order = constructorList.map((ingredient: TIngredient) => ingredient._id);
      order.push(selectedBun._id);
      if (!user.name) {
        history.push('/login', { from: location });
      } else dispatch(getOrderDetails(order));
    } else {
      console.error('Не выбраны ингредиенты!');
    }
  }

  return (
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
  );
}
