import React from "react";
import BurgerConstructorStyles from './BurgerConstructor.module.css';
import {DragIcon, ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import propTypes from 'prop-types';

function BurgerConstructor(props) {

  return(
    <section className={`${BurgerConstructorStyles.burgerConstructor} pt-25`}>
      <div className={`${BurgerConstructorStyles.selectedElements}  ml-4 mb-10`}>

        <ul className={`${BurgerConstructorStyles.lockedElements}`}>
          <li>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
        </ul>

        <ul  className={`${BurgerConstructorStyles.elements}`}>
          {props.data.slice(4,10).map(item => (
            item.type !== 'bun' && (
              <li key={item._id} className={`${BurgerConstructorStyles.element}`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            )
          ))}
        </ul>

        <ul className={`${BurgerConstructorStyles.lockedElements}`}>
          <li>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
        </ul>
      </div>
      <div className={`${BurgerConstructorStyles.confirmButton} mr-4`}>
        <div className={`${BurgerConstructorStyles.total} mr-10 `}>
          <p className="text text_type_digits-medium mr-2">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    proteins: propTypes.number,
    fat: propTypes.number,
    carbohydrates: propTypes.number,
    calories: propTypes.number,
    price: propTypes.number.isRequired,
    image: propTypes.string.isRequired,
    image_mobile: propTypes.string,
    image_large: propTypes.string,
    __v: propTypes.number
  }))
}

export default BurgerConstructor;