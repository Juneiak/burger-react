import React from 'react';
import styles from './order-card.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector, useDispatch} from 'react-redux';
import {useRouteMatch, useHistory, useLocation} from 'react-router-dom';
import {SELECT_ORDER} from '../../services/actions/order';

export function OrderCard({statusBar, orderData: {ingredients, name, number, _id, status, createdAt}}) {
  const [totalPrice, setTotalPrice] = React.useState()
  const [selectedIngredients, setSelectedIngredients] = React.useState([])
  const [createdTime, setCreatedTime] = React.useState('')
  const {url} = useRouteMatch()

  const ingredientsList = useSelector(store => store.index.ingredientsList)

  React.useEffect(() => {
    
    setSelectedIngredients(ingredients.map(ingredientID => {
      return ingredientsList.find(ingredient => ingredient._id === ingredientID)
    }))
    
  }, [ingredients])

  React.useEffect(() => {
    setTotalPrice(selectedIngredients.reduce((sum, ingredient) => (sum + ingredient.price), 0))
  }, [selectedIngredients])

  React.useEffect(() => {
    setCreatedTime(new Date(Date.parse(createdAt)).toDateString())
  }, [])


  const ingredientsToShow = ingredientsList.filter((ingredient) => ingredients.includes(ingredient._id))
  let restIngredients = ingredientsToShow.splice(5,)
  

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const onCardClick = () => {
    dispatch({type: SELECT_ORDER, data: {totalPrice, selectedIngredients, name, number, _id, status, createdTime}})
    history.push(`${url}/${_id}`, {background: location})
  }

  return (
    <article onClick={onCardClick} className={`${styles.card}`}>

      <div className={styles.header}>
        <p className={styles.orderNumber}>{`#${number}`}</p>
        <p className='text text_type_main-default text_color_inactive'>{createdTime}</p>
      </div>
        <div className={styles.title}>
          <h3 className='text text_type_main-medium mb-2'>{name}</h3>
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
  )
}