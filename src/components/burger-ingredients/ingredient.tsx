import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
import { selectIngredient } from '../../services/actions/index';
import IngredientStyles from './ingredient.module.css';
import { TIngredient } from '../../services/types/data/index';

interface TIngredientProps {
  ingredientData: TIngredient;
  id: string;
}
export const Ingredient: FC<TIngredientProps> = ({ ingredientData, id }) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { constructorList, selectedBun } = useSelector((store) => ({
    constructorList: store.index.constructorList,
    selectedBun: store.index.selectedBun,
  }));

  React.useEffect(() => {
    if (ingredientData.type === 'bun') {
      if (selectedBun._id === id) {
        setCount(2);
      } else {
        setCount(0);
      }
    } else {
      setCount(constructorList.filter((ingredient: TIngredient) => ingredient._id === id).length);
    }
  }, [constructorList, selectedBun]);

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: { id, ingredientType: ingredientData.type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  function onIngredientClick() {
    dispatch(selectIngredient(id));
    history.push(`/ingredients/${id}`, { background: location });
  }

  return (
    <li ref={dragRef} style={{ opacity }} className={IngredientStyles.ingredientsMenuItem}>
      <article onClick={onIngredientClick} className={IngredientStyles.ingredient}>
        {count !== 0 && (
          <div className={IngredientStyles.count}>
            <Counter count={count} size="default" />
          </div>
        )}

        <img className={`${IngredientStyles.ingredientImage} mb-1 mr-4 ml-4`} src={ingredientData.image} alt={ingredientData.name} />
        <div className={`${IngredientStyles.cost} mb-1`}>
          <p className="text text_type_digits-default mr-2">{ingredientData.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className={`${IngredientStyles.name} text text_type_main-default`}>{ingredientData.name}</h3>
      </article>
    </li>

  );
};
