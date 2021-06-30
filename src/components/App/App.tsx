import React from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';

const apiUrl = 'https://norma.nomoreparties.space/api/ingredients ';

function App() {
  
  const [data, setData] = React.useState([])
  const [modalIngredientDetailsIsOpen, toggleModalIngredientDetails] = React.useState(false);
  const [modalOrderDetailsIsOpen, toggleModalOrderDetails]  = React.useState(false);

  React.useEffect(() =>{
    function getData() {
      fetch(apiUrl)
        .then(res => res.json())
        .then(dataObj => setData(dataObj.data))
        .catch(err => console.error(err))
    }
    getData()
  }, [])

  function handleCloseModal() {
    toggleModalIngredientDetails(false)
    toggleModalOrderDetails(false)
  }

  function handleIngredientClick() {
    toggleModalIngredientDetails(true)
  }

  function handleOrderClick() {
    toggleModalOrderDetails(true)
  }

  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <main className={AppStyles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </main>
      <Modal></Modal>
    </div>
  );
}

export default App;
