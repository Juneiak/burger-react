import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsSyles from './burger-ingredients.module.css';
import { Ingredient } from './ingredient';
import { useSelector } from '../../services/hooks';
import { TIngredient } from '../../services/types/data';

export const BurgerIngredients = () => {
  const data = useSelector((store) => store.index.ingredientsList);

  const [current, setCurrent] = React.useState('bun');
  const containerRef = React.useRef<HTMLUListElement>(null);
  const bunListRef = React.useRef<HTMLLIElement>(null);
  const sauceListRef = React.useRef<HTMLLIElement>(null);
  const mainListRef = React.useRef<HTMLLIElement>(null);

  function onIngredientScroll() {
    if (containerRef.current && bunListRef.current && sauceListRef.current && mainListRef.current) {
      const containerYPoition = containerRef.current.getBoundingClientRect().y;
      const bunYPoition = bunListRef.current.getBoundingClientRect().y;
      const sauceYPoition = sauceListRef.current.getBoundingClientRect().y;
      const mainYPoition = mainListRef.current.getBoundingClientRect().y;
      if ((Math.abs(bunYPoition) - containerYPoition) < (Math.abs(sauceYPoition) - containerYPoition)) {
        setCurrent('bun');
      } else if ((Math.abs(sauceYPoition) - containerYPoition) < (Math.abs(mainYPoition) - containerYPoition)) {
        setCurrent('sauce');
      } else {
        setCurrent('main');
      }
    }
  }

  return (
    <section className={`${burgerIngredientsSyles.burgerIngredients} pt-10`}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>

      <div style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <ul ref={containerRef} onScroll={onIngredientScroll} className={`${burgerIngredientsSyles.menu} mt-10`}>

        <li ref={bunListRef} className={`${burgerIngredientsSyles.menuItem}`}>
          <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Булки</h2>
          <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
            {data.map((item: TIngredient) => (
              item.type === 'bun' && (
                <Ingredient key={item._id} id={item._id} ingredientData={item} />
              )
            ))}
          </ul>
        </li>

        <li ref={sauceListRef} className={burgerIngredientsSyles.menuItem}>
          <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Соусы</h2>
          <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
            {data.map((item: TIngredient) => (
              item.type === 'sauce' && (
                <Ingredient key={item._id} id={item._id} ingredientData={item} />
              )
            ))}
          </ul>
        </li>

        <li ref={mainListRef} className={burgerIngredientsSyles.menuItem}>
          <h2 className={`${burgerIngredientsSyles.typeName} text text_type_main-medium mb-6`}>Начинки</h2>
          <ul className={`${burgerIngredientsSyles.ingredientsMenu} mb-10`}>
            {data.map((item: TIngredient) => (
              item.type === 'main' && (
                <Ingredient key={item._id} id={item._id} ingredientData={item} />
              )
            ))}
          </ul>
        </li>

      </ul>

    </section>

  );
};
