import React from 'react';
import BurgerStyles from './Burger.module.css'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrop} from 'react-dnd';
import {useDispatch, useSelector} from 'react-redux'
import {ADD_INGREDIENT_INTO_CONSTRUCTOR} from '../../services/actions/index.js';
import Filling from './Filling';
function Burger() {

  const dispatch = useDispatch()
  const {constructorList, selectedBun} = useSelector(store => ({
    constructorList: store.index.constructorList,
    selectedBun: store.index.selectedBun
  }))
  
  const [{isIngredientHover}, ingredientDropRef] = useDrop({
    accept: 'ingredient',
    drop(item) {
      dispatch({
        type: ADD_INGREDIENT_INTO_CONSTRUCTOR,
        id: item.id,
        ingredientType: item.ingredientType})
    },
    collect: monitor => ({
      isIngredientHover: monitor.isOver()
    })
  })

  const border = isIngredientHover ? '1px #8585AD solid' : 'none';

  const fillingChoiсe = (
    <div className={BurgerStyles.fillingChoiсe}>
      <p className='text text_type_main-medium'>Выберите начинку</p>
    </div>
  )
  const bunChoiсe = (
    <div className={BurgerStyles.bunChoiсe}>
      <p className='text text_type_main-medium'>Выберите булку</p>
    </div>
  )

  return (
    
    <div ref={ingredientDropRef} style={{border}} className={`${BurgerStyles.burger}  ml-4 mb-10`}>
      
      {selectedBun._id ? (
        <div className={`${BurgerStyles.bun}`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={selectedBun.name}
          price={selectedBun.price}
          thumbnail={selectedBun.image}
        />
      </div>
      ) : bunChoiсe}

      {constructorList.length !== 0 ? (
          <ul className={BurgerStyles.ingredients}>
            {constructorList.map((item, index) => (
              item.type !== 'bun' && <Filling key={index} item={item} index={index}/>
            ))}
          </ul>
      ) : fillingChoiсe}


      {selectedBun._id ? (
        <div className={`${BurgerStyles.bun}`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={selectedBun.name}
          price={selectedBun.price}
          thumbnail={selectedBun.image}
        />
        </div>
      ) : bunChoiсe}

    </div>
  )
}

export default Burger;