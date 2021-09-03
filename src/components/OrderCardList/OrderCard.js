import React from 'react';
import styles from './OrderCard.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from 'react-redux';
import {Link, useRouteMatch} from 'react-router-dom';
function OrderCard({orderData: {ingredients: selectedIngredientsIdList, number, status, createdAt}}) {

  const createdTime =  new Date(Date.parse(createdAt)).toDateString()
  const orderName = 'Black Hole Singularity острый бургер'
  const ingredientsList = useSelector(store => store.index.ingredientsList)
  const {url} = useRouteMatch()

  const selectedIngredients = ingredientsList.filter((ingredient) => selectedIngredientsIdList.includes(ingredient._id))
  const ingredientsToShow = selectedIngredients
  let restIngredients = ingredientsToShow.splice(5,)
  const orderTotalPrice = 1000;
  const _id = 500

  return (
    <Link to={`${url}/${_id}`} className={styles.commonLink}>
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
            {ingredientsToShow.map((ingredient, index) => (
              <li key={index} style={{zIndex: `${5-index}`}}>
                <img  className={styles.ingredientImage} src={ingredient.image} ></img>
              </li>
            ))}
            {restIngredients.length > 0 &&
              <li>
                <div className={styles.restIngredients} style={{backgroundImage: `url(${restIngredients[0].image})`}}>
                  {restIngredients.length > 1 && <p className={styles.restIngredientsCount}>{`+${restIngredients.length}`}</p>}
                </div>
              </li>
            }
          </ul>

          <div className={styles.price}>
            <p className={`${styles.total} text text_type_digits-default`}>{orderTotalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>

        </div>
      </article>
    </Link>
  )
}

export default OrderCard;