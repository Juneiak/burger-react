
import burgerIngredientsSyles from "./BurgerIngredients.module.css";
import Menu from "./Menu";
import Ingredient from "./Ingredient";
import propTypes from 'prop-types';
import {useSelector} from "react-redux";

function BurgerIngredients(props) {

  const data = useSelector(store => store.index.ingredientsList)
  
  return (
    <section className={`${burgerIngredientsSyles.burgerIngredients} pt-10`}>
      <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
      <Menu />
      <ul className={`${burgerIngredientsSyles.menu} mt-10`}>

        <li className={`${burgerIngredientsSyles.menuItem}`}>
          <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Булки</h2>
          <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
            {data.map(item => (
              item.type === 'bun' && (
                <Ingredient key={item._id} id={item._id} onClick={props.onIngredientClick} data={item} />
              )
            ))}
          </ul>
        </li>

        <li className={burgerIngredientsSyles.menuItem}>
          <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Соусы</h2>
          <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
            {data.map(item => (
              item.type === 'sauce' && (
                <Ingredient key={item._id} id={item._id} onClick={props.onIngredientClick} data={item} />
              )
            ))}
          </ul>
        </li>

        <li className={burgerIngredientsSyles.menuItem}>
          <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Начинки</h2>
          <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
            {data.map(item => (
              item.type === 'main' && (
                <Ingredient key={item._id} id={item._id} onClick={props.onIngredientClick} data={item} />
              )
            ))}
          </ul>
        </li>

      </ul>
      
    </section>
    
  )
  
};

BurgerIngredients.propTypes = {
  onIngredientClick: propTypes.func.isRequired
}

export default BurgerIngredients;