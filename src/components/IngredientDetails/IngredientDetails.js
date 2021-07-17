import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ingredientDetailsStyles from './IngredientDetails.module.css';

function IngredientDetails() {

  const ingredient = useSelector(store => store.index.selectedIngredient)

  return (
      <div className={ingredientDetailsStyles.content}>
        <h2 className={`${ingredientDetailsStyles.title} text text_type_main-large`}>Детали ингредиента</h2>
        <img src={ingredient.image} alt={ingredient.name} className={`${ingredientDetailsStyles.image} text text_type_main-large mb-4`} />
        <p className='mb-8 text text_type_main-medium'>{ingredient.name}</p>
        <ul className={ingredientDetailsStyles.nutrients}>
          <li className='mr-5'>
            <p className='text mb-2 text_type_main-default text_color_inactive'>Калории, ккал</p>
            <p className='text text_type_main-default text_color_inactive'>{ingredient.calories}</p>
          </li>
          <li className='mr-5'>
            <p className='text mb-2 text_type_main-default text_color_inactive'>Белки, г</p>
            <p className='text text_type_main-default text_color_inactive'>{ingredient.proteins}</p>
          </li>
          <li className='mr-5'>
            <p className='text mb-2 text_type_main-default text_color_inactive'>Жиры, г</p>
            <p className='text text_type_main-default text_color_inactive'>{ingredient.fat}</p>
          </li>
          <li className='mr-5'>
            <p className='text mb-2 text_type_main-default text_color_inactive'>Углеводы, г</p>
            <p className='text text_type_main-default text_color_inactive'>{ingredient.carbohydrates}</p>
          </li>
        </ul>
      </div>
    )
}

export default IngredientDetails;