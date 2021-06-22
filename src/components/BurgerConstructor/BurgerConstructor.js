import React from "react";
import BurgerConstructorStyles from './BurgerConstructor.module.css';
import {DragIcon, ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerConstructor extends React.Component {

  render() {
    return(
      <section className={`${BurgerConstructorStyles.burgerConstructor} pt-25`}>
        <div className={`${BurgerConstructorStyles.selectedElements} mr-4 ml-4 mb-10`}>

          <ul className={`${BurgerConstructorStyles.lockedElements}`}>
            <li className={`${BurgerConstructorStyles.element}`}>
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
            <li className={`${BurgerConstructorStyles.element}`}>
              <div className='mr-2'><DragIcon type="primary" /></div>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={`${BurgerConstructorStyles.element}`}>
              <div className='mr-2'><DragIcon type="primary" /></div>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={`${BurgerConstructorStyles.element}`}>
              <div className='mr-2'><DragIcon type="primary" /></div>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={`${BurgerConstructorStyles.element}`}>
              <div className='mr-2'><DragIcon type="primary" /></div>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={`${BurgerConstructorStyles.element}`}>
              <div className='mr-2'><DragIcon type="primary" /></div>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={`${BurgerConstructorStyles.element}`}>
              <div className='mr-2'><DragIcon type="primary" /></div>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={`${BurgerConstructorStyles.element}`}>
              <div className='mr-2'><DragIcon type="primary" /></div>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
            <li className={`${BurgerConstructorStyles.element}`}>
              <div className='mr-2'><DragIcon type="primary" /></div>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </li>
          </ul>

          <ul className={`${BurgerConstructorStyles.lockedElements}`}>
            <li className={`${BurgerConstructorStyles.element}`}>
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
}

export default BurgerConstructor;