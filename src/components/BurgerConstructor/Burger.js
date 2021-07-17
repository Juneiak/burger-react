import React from 'react';
import BurgerStyles from './Burger.module.css'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrop} from 'react-dnd';
import {useDispatch, useSelector} from 'react-redux'
import {ADD_INGREDIENT_INTO_CONSTRUCTOR} from '../../services/actions/index.js';

function Burger() {

  const dispatch = useDispatch()
  const data = useSelector(store => store.index.constructorList)

  const [{isHover}, dropRef] = useDrop({
    accept: 'ingredient',
    drop(itemId) {
      dispatch({type: ADD_INGREDIENT_INTO_CONSTRUCTOR, id: itemId.id})
    },
    collect: monitor => ({
      isHover: monitor.isOver()
    })
  })

  const border = isHover ? '1px red solid' : 'none';

  return (
    <div ref={dropRef} style={{border}} className={`${BurgerStyles.selectedIngredients}  ml-4 mb-10`}>
      <div style={{border}} className={`${BurgerStyles.bun}`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={'1'}
          price={'1'}
          thumbnail={'1'}
        />
      </div>


      <ul ref={dropRef} style={{border}} className={`${BurgerStyles.ingredients}`}>
        {data.map(item => (
          item.type !== 'bun' && (
            <li key={item._id} className={`${BurgerStyles.ingredient}`}>
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


      <div className={`${BurgerStyles.bun}`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={'1'}
          price={'1'}
          thumbnail={'1'}
        />
      </div>
    </div>
  )
}

export default Burger;