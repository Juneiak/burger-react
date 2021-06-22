
import React from "react";
import {Tab, CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsSyles from "./BurgerIngredients.module.css";

function Menu() {
  const [current, setCurrent] = React.useState('one')
  return (
    <div style={{ display: 'flex' }}>
      <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

function Ingredient(props) {
  return (
    <article className={burgerIngredientsSyles.ingredient}>
      <div className={burgerIngredientsSyles.count}>
        <Counter count={1} size="default" />
      </div>
      <img className={`${burgerIngredientsSyles.ingredientImage} mb-1 mr-4 ml-4`} src={props.image} alt="ingredient" />
      <div className={`${burgerIngredientsSyles.cost} mb-1`}>
        <p className='text text_type_digits-default mr-2'>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${burgerIngredientsSyles.name} text text_type_main-default`}>{props.name}</h3>
    </article>
  )
}

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