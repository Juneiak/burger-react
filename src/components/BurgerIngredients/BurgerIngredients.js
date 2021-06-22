import React from "react";
import burgerIngredientsSyles from "./BurgerIngredients.module.css";
import Menu from "./Menu";
import Ingredient from "./Ingredient";

class BurgerIngredients extends React.Component {

  render() {
    return (
      <section className={`${burgerIngredientsSyles.burgerIngredients} pt-10`}>
        <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
        <Menu />
        <ul className={`${burgerIngredientsSyles.menu} mt-10`}>

          <li className={burgerIngredientsSyles.menuItem}>
            <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Булки</h2>
            <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
              {this.props.data.map(item => (
                item.type === 'bun' && (
                  <li key={item._id} className={burgerIngredientsSyles.ingredientsMenuItem}>
                  <Ingredient  price={item.price} image={item.image} name={item.name}/>
                </li>
                )
              ))}
            </ul>
          </li>

          <li className={burgerIngredientsSyles.menuItem}>
            <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Соусы</h2>
            <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
              {this.props.data.map(item => (
                item.type === 'sauce' && (
                  <li key={item._id} className={burgerIngredientsSyles.ingredientsMenuItem}>
                  <Ingredient  price={item.price} image={item.image} name={item.name}/>
                </li>
                )
              ))}
            </ul>
          </li>

          <li className={burgerIngredientsSyles.menuItem}>
            <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Начинки</h2>
            <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
              {this.props.data.map(item => (
                item.type === 'main' && (
                  <li key={item._id} className={burgerIngredientsSyles.ingredientsMenuItem}>
                  <Ingredient  price={item.price} image={item.image} name={item.name}/>
                </li>
                )
              ))}
            </ul>
          </li>

        </ul>
        
      </section>
      
    )
  }
};

export default BurgerIngredients;