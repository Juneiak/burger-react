
import burgerIngredientsSyles from "./BurgerIngredients.module.css";
import Menu from "./Menu";
import Ingredient from "./Ingredient";
import propTypes from 'prop-types';

function BurgerIngredients(props) {



  return (
    <section className={`${burgerIngredientsSyles.burgerIngredients} pt-10`}>
      <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
      <Menu />
      <ul className={`${burgerIngredientsSyles.menu} mt-10`}>

        <li className={`${burgerIngredientsSyles.menuItem}`}>
          <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Булки</h2>
          <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
            {props.data.map(item => (
              item.type === 'bun' && (
                <Ingredient key={item._id} id={item._id} onClick={props.onIngredientClick} data={item} />
              )
            ))}
          </ul>
        </li>

        <li className={burgerIngredientsSyles.menuItem}>
          <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Соусы</h2>
          <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
            {props.data.map(item => (
              item.type === 'sauce' && (
                <Ingredient key={item._id} id={item._id} onClick={props.onIngredientClick} data={item} />
              )
            ))}
          </ul>
        </li>

        <li className={burgerIngredientsSyles.menuItem}>
          <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Начинки</h2>
          <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
            {props.data.map(item => (
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
  data: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    proteins: propTypes.number,
    fat: propTypes.number,
    carbohydrates: propTypes.number,
    calories: propTypes.number,
    price: propTypes.number.isRequired,
    image: propTypes.string.isRequired,
    image_mobile: propTypes.string,
    image_large: propTypes.string,
    __v: propTypes.number
  }).isRequired),
  onIngredientClick: propTypes.func.isRequired
}

export default BurgerIngredients;