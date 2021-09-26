import React from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop } from 'react-dnd';
import BurgerStyles from './burger.module.css';
import { useDispatch, useSelector } from '../../services/hooks';
import { addIngredientIntoConstructor } from '../../services/actions/index';
import { Filling } from './filling';
import { TIngredient } from '../../services/types/data';

export function Burger() {
  const dispatch = useDispatch();

  const { selectedBun, constructorList } = useSelector((store) => ({
    selectedBun: store.index.selectedBun,
    constructorList: store.index.constructorList,
  }));

  const [{ isIngredientHover }, ingredientDropRef] = useDrop({
    accept: 'ingredient',
    drop(item: any) {
      dispatch(addIngredientIntoConstructor(item.id, item.ingredientType));
    },
    collect: (monitor: any) => ({
      isIngredientHover: monitor.isOver(),
    }),
  });

  const border = isIngredientHover ? '1px #8585AD solid' : 'none';

  const fillingChoiсe = (
    <div className={BurgerStyles.fillingChoiсe}>
      <p className="text text_type_main-medium">Выберите начинку</p>
    </div>
  );
  const bunChoiсe = (
    <div className={BurgerStyles.bunChoiсe}>
      <p className="text text_type_main-medium">Выберите булку</p>
    </div>
  );

  return (

    <div ref={ingredientDropRef} style={{ border }} className={`${BurgerStyles.burger}  ml-4 mb-10`}>

      {selectedBun._id ? (
        <div className={`${BurgerStyles.bun}`}>
          <ConstructorElement
            type="top"
            isLocked
            text={`${selectedBun.name} (верх)`}
            price={selectedBun.price}
            thumbnail={`${selectedBun.image}`}
          />
        </div>
      ) : bunChoiсe}

      {constructorList.length !== 0 ? (
        <ul className={BurgerStyles.ingredients}>
          {constructorList.map((item: TIngredient, index: number) => (
            item.type !== 'bun' && <Filling key={index} item={item} index={index} />
          ))}
        </ul>
      ) : fillingChoiсe}

      {selectedBun._id ? (
        <div className={`${BurgerStyles.bun}`}>
          <ConstructorElement
            type="bottom"
            isLocked
            text={`${selectedBun.name} (низ)`}
            price={selectedBun.price}
            thumbnail={`${selectedBun.image}`}
          />
        </div>
      ) : bunChoiсe}

    </div>
  );
}
