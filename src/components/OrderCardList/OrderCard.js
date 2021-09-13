import React from 'react';
import styles from './OrderCard.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from 'react-redux';
import {Link, useRouteMatch} from 'react-router-dom';

function OrderCard({statusBar, orderData: {ingredients: selectedIngredientsIdList, name: orderName, number, _id, status, createdAt}}) {
  const [totalPrice, setTotalPrice] = React.useState()
  const {url} = useRouteMatch()
  const ingredientsList = useSelector(store => store.index.ingredientsList)
  const createdTime =  new Date(Date.parse(createdAt)).toDateString()

  const selectedIngredients = ingredientsList.filter((ingredient) => selectedIngredientsIdList.includes(ingredient._id))
  const ingredientsToShow = selectedIngredients
  let restIngredients = ingredientsToShow.splice(5,)
  
  React.useEffect(() => {
    setTotalPrice(selectedIngredients.reduce((sum, ingredient) => (sum + ingredient.price), 0))
    
  }, [selectedIngredients])

  return (
    <Link to={`${url}/${_id}`} className={styles.commonLink}>
      <article className={`${styles.card}`}>

        <div className={styles.header}>
          <p className={styles.orderNumber}>{`#${number}`}</p>
          <p className='text text_type_main-default text_color_inactive'>{createdTime}</p>
        </div>
          <div className={styles.title}>
            <h3 className='text text_type_main-medium mb-2'>{orderName}</h3>
            {statusBar && 
            <p 
              style={{color: status==='done' ? '#fff' : '#00CCCC'}}
              className='text text_type_main-default'>{status==='done' ? 'Выполнен' : 'Готовится'}
            </p>}
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
            <p className={`${styles.total} text text_type_digits-default`}>{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>

        </div>
      </article>
    </Link>
  )
}

export default OrderCard;