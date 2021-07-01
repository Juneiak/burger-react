import React from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

const apiUrl = 'https://norma.nomoreparties.space/api/ingredients ';

function App() {
  
  const [data, setData] = React.useState([])
  const [selectedIngredient, setSelectedIngredient] = React.useState(null);
  const [modalOrderDetailsIsOpen, toggleModalOrderDetails]  = React.useState(false);

  React.useEffect(() => {
    function getData() {
      fetch(apiUrl)
        .then(res => res.json())
        .then(dataObj => setData(dataObj.data))
        .catch(err => console.error(err))
    }
    getData()
  }, [])

  function handleCloseModal() {
    setSelectedIngredient(null)
    toggleModalOrderDetails(false)
  }

  function handleIngredientClick(ingredient) {
    setSelectedIngredient(ingredient)
  }

  function handleOrderClick() {
    toggleModalOrderDetails(true)
  }

  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <main className={AppStyles.main}>
        <BurgerIngredients onIngredientClick={handleIngredientClick} data={data}/>
        <BurgerConstructor onOrderClick={handleOrderClick} data={data}/>
      </main>
      {modalOrderDetailsIsOpen && <OrderDetails onClose={handleCloseModal}></OrderDetails> }
      {selectedIngredient && <IngredientDetails ingredient = {selectedIngredient} onClose={handleCloseModal}></IngredientDetails> }
    </div>
  );
}

export default App;
