import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from './Ingredient.module.css';
import {useDrag} from 'react-dnd';
import {SELECT_INGREDIENT} from '../../services/actions/index.js';
import {useDispatch} from 'react-redux';

function Ingredient({data, id}) {
  
  const dispatch = useDispatch()

  const [{opacity}, dragRef] = useDrag({
    type: 'ingredient',
    item: {id},
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })

  function onIngredientClick() {
    dispatch({type: SELECT_INGREDIENT, id})
  }

  return (
    <li ref={dragRef} style={{opacity}} className={IngredientStyles.ingredientsMenuItem}>
      <article onClick={onIngredientClick} className={IngredientStyles.ingredient}>
        <div className={IngredientStyles.count}>
          <Counter count={1} size="default" />
        </div>
        <img className={`${IngredientStyles.ingredientImage} mb-1 mr-4 ml-4`} src={data.image} alt={data.name} />
        <div className={`${IngredientStyles.cost} mb-1`}>
          <p className='text text_type_digits-default mr-2'>{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className={`${IngredientStyles.name} text text_type_main-default`}>{data.name}</h3>
      </article>
    </li>
    
  )
}
export default Ingredient;