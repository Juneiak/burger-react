import React, { FC } from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import FillingStyles from './filling.module.css';
import { useDispatch } from '../../services/hooks';
import { removeIngredientFromConstructor, updateSelectedIngredient } from '../../services/actions/index';
import { TIngredient } from '../../services/types/data/index';

interface IFillingProps {
  item: TIngredient;
  index: number;
}

export const Filling: FC<IFillingProps> = ({ item, index }) => {
  const dispatch = useDispatch();

  const [{ isFillingDrag }, fillinDragRef] = useDrag({
    type: 'filling',
    item: { index },
    collect: (monitor) => ({
      isFillingDrag: monitor.isDragging(),

    }),
  });

  const [{ isFillingHover }, fillingDropRef] = useDrop({
    accept: 'filling',
    drop(item: any) {
      dispatch(updateSelectedIngredient(item.index, index));
    },
    collect: (monitor) => ({
      isFillingHover: monitor.isOver(),
    }),
  });

  function handleRemoveClick(index: number) {
    dispatch(removeIngredientFromConstructor(index));
  }

  const paddingTop = isFillingHover ? '90px' : '0';

  return (
    <li ref={fillingDropRef} style={{ paddingTop }} className={FillingStyles.ingredient}>
      {!isFillingDrag && (
        <article ref={fillinDragRef}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            handleClose={() => handleRemoveClick(index)}
          />
        </article>
      )}

    </li>
  );
};
