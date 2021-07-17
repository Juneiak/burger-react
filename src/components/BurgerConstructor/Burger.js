import React from 'react';
import BurgerStyles from './Burger.module.css'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrop} from 'react-dnd';
import {useDispatch, useSelector} from 'react-redux'
import {ADD_INGREDIENT_INTO_CONSTRUCTOR, REMOVE_INGREDIENT_FROM_CONSTRUCTOR} from '../../services/actions/index.js';

function Burger() {

  const dispatch = useDispatch()
  const {constructorList, selectedBun} = useSelector(store => ({
    constructorList: store.index.constructorList,
    selectedBun: store.index.selectedBun
  }))
  
  const [{isHover}, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item) {
      dispatch({
        type: ADD_INGREDIENT_INTO_CONSTRUCTOR,
        id: item.id,
        ingredientType: item.ingredientType})
    },
    collect: monitor => ({
      isHover: monitor.isOver()
    })
  })

  function handleRemoveClick(index) {
    console.log(index);
    dispatch({type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, index})
  }

  const border = isHover ? '1px #8585AD solid' : 'none';

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
    
    <div ref={dropRef} style={{border}} className={`${BurgerStyles.burger}  ml-4 mb-10`}>
      
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
              item.type !== 'bun' && (
                <li key={index} className={BurgerStyles.ingredient}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    handleClose={() => handleRemoveClick(index)}
                  />
                </li>
              )
            ))}
          </ul>
      ) : fillingChoiсe}


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

    </div>
  )
}

export default Burger;