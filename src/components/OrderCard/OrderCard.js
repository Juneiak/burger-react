import React from 'react';
import styles from './OrderCard.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from 'react-redux';

function OrderCard({orderData: {ingredients: selectedIngredientsIdList, number, status, createdAt}}) {
  const createdTime =  new Date(Date.parse(createdAt)).toDateString();
  const orderName = 'Black Hole Singularity острый бургер'
  const ingredientsList = useSelector(store => store.index.ingredientsList)
  const selectedIngredients = ingredientsList.filter((ingredient) => selectedIngredientsIdList.includes(ingredient._id))

  const ingredientsToShow = []
  
  const orderTotalPrice = 1000;
  return (
    <article className={`${styles.card}`}>
      <div className={styles.header}>
        <p className={styles.orderNumber}>{`#${number}`}</p>
        <p className='text text_type_main-default text_color_inactive'>{createdTime}</p>
      </div>
        <div className={styles.title}>
          <h3 className='text text_type_main-medium mb-2'>{orderName}</h3>
          <p className='text text_type_main-default'>{status}</p>
        </div>
        
      <div className={styles.list}>

        <ul className={styles.selectedIngredientsList}>
          {selectedIngredients.map((selectedIngredient, index) => (
            <li key={index} className={styles.selectedIngredient}>
              <img className={styles.ingredientImage} src={selectedIngredient.image} alt={selectedIngredient.name}></img>
            </li>
          ))}
        </ul>

        <div className={styles.price}>
          <p className={styles.total}>{orderTotalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>

      </div>
    </article>
  )
}

export default OrderCard;