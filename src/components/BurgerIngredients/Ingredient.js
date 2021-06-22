import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from './Ingredient.module.css';

function Ingredient(props) {
  return (
    <article className={IngredientStyles.ingredient}>
      <div className={IngredientStyles.count}>
        <Counter count={1} size="default" />
      </div>
      <img className={`${IngredientStyles.ingredientImage} mb-1 mr-4 ml-4`} src={props.image} alt="ingredient" />
      <div className={`${IngredientStyles.cost} mb-1`}>
        <p className='text text_type_digits-default mr-2'>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${IngredientStyles.name} text text_type_main-default`}>{props.name}</h3>
    </article>
  )
}
export default Ingredient;