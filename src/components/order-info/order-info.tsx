import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './order-info.module.css';
import { useSelector } from '../../services/hooks';
import { TIngredient } from '../../services/types/data/index';

interface IUpgradedIngredient extends TIngredient {
  amount?: number
}

export const OrderInfo = () => {
  const [ingredientsToDisplay, setIngredientsToDisplay] = React.useState<IUpgradedIngredient[]>();
  const {
    selectedOrder: {
      totalPrice, selectedIngredients, name, number, status, createdTime,
    },
  } = useSelector((store) => ({ selectedOrder: store.order.selectedOrder }));

  React.useEffect(() => {
    const intoCheck = (array: TIngredient[] | [], elementX: TIngredient) => array.find((elementY) => elementX._id === elementY._id);
    const allKindOfIngredients: Array<IUpgradedIngredient> = [];

    selectedIngredients.forEach((ingredient: TIngredient) => {
      if (!intoCheck(allKindOfIngredients, ingredient)) {
        allKindOfIngredients.push(ingredient);
      }
    });

    setIngredientsToDisplay(allKindOfIngredients.map((ingredient) => {
      if (ingredient.type === 'bun') ingredient.amount = 2;
      else ingredient.amount = selectedIngredients.filter((element: IUpgradedIngredient) => element._id === ingredient._id).length;
      return ingredient;
    }));
  }, [selectedIngredients]);

  return (
    <div className={styles.content}>
      <p className="text text_type_digits-default mb-10">{`#${number}`}</p>
      <div className={styles.about}>
        <h3 className="text text_type_main-medium mb-3">{name}</h3>
        <p
          style={{ color: status === 'done' ? '#fff' : '#00CCCC' }}
          className="text text_type_main-default mb-15"
        >
          {status === 'done' ? 'Выполнен' : 'Готовится'}
        </p>
        <p className="text text_type_main-medium mb-6">Состав:</p>
      </div>

      <ul className={styles.ingredientsList}>
        {ingredientsToDisplay && ingredientsToDisplay.map((ingredient: IUpgradedIngredient, index: number) => (
          <li key={index} className={styles.ingredient}>
            <div className={styles.info}>
              <img src={ingredient.image} className={styles.image} />
              <p className="text text_type_main-default ml-4">{ingredient.name}</p>
            </div>
            <div className={`${styles.price} ml-4`}>
              <p className={`${styles.total} text text_type_digits-default`}>{`${ingredient.amount} x ${ingredient.price}`}</p>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}

      </ul>

      <div className={styles.footer}>
        <p className="text text_type_main-default text_color_inactive">{createdTime}</p>
        <div className={styles.price}>
          <p className={`${styles.total} text text_type_digits-default`}>{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
