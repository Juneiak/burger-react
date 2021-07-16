import React from 'react';
import BurgerConstructorStyles from './BurgerConstructor.module.css';
import {DragIcon, ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import propTypes from 'prop-types';
import { DataContext } from '../../contexts/dataContext';

function BurgerConstructor(props) {
  const data = React.useContext(DataContext)
  const [selectedBun, setSelectedBun] = React.useState({})

  React.useEffect(() => {
    const bun = data.find((ingredient) => {
      return ingredient.type === 'bun'
    })
    setSelectedBun(bun)
  }, [data])

  function handleOrderClick() {
    const order = ["60d3b41abdacab0026a733c6","60d3b41abdacab0026a733c6","60d3b41abdacab0026a733cc","60d3b41abdacab0026a733ce","60d3b41abdacab0026a733cf","60d3b41abdacab0026a733c8","60d3b41abdacab0026a733c9"]
    props.onOrderClick(order)
  }

  return(
    <section className={`${BurgerConstructorStyles.burgerConstructor} pt-25`}>
      <div className={`${BurgerConstructorStyles.selectedElements}  ml-4 mb-10`}>

        <div className={`${BurgerConstructorStyles.lockedElements}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={selectedBun && selectedBun.name}
            price={selectedBun && selectedBun.price}
            thumbnail={selectedBun && selectedBun.image}
          />
        </div>

        <ul  className={`${BurgerConstructorStyles.elements}`}>
          {data.slice(0,6).map(item => (
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

        <div className={`${BurgerConstructorStyles.lockedElements}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={selectedBun && selectedBun.name}
            price={selectedBun && selectedBun.price}
            thumbnail={selectedBun && selectedBun.image}
          />
        </div>

      </div>
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

BurgerConstructor.propTypes = {
  onOrderClick: propTypes.func.isRequired
}

export default BurgerConstructor;