import React from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { DataContext } from '../../contexts/dataContext';
const apiUrl = 'https://norma.nomoreparties.space/api/ingredients ';

function App() {
  
  const [data, setData] = React.useState([])
  const [selectedIngredient, setSelectedIngredient] = React.useState(null);
  const [modalOrderDetailsIsOpen, toggleModalOrderDetails]  = React.useState(false);
  const [orderData, setOrerData] = React.useState({})
  React.useEffect(() => {
    function getData() {
      fetch(apiUrl)
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          return Promise.reject(`error: ${res.status}`)
        } )
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

  function handleOrderClick(order) {
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ingredients": order
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`error: ${res.status}`)
      })
      .then(data => {
        setOrerData(data)
        toggleModalOrderDetails(true)
      })
      .catch(err => {
        console.error(err);
      })
    
  }

  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <main className={AppStyles.main}>
        <BurgerIngredients onIngredientClick={handleIngredientClick} data={data}/>
        <DataContext.Provider value={data}>
          <BurgerConstructor onOrderClick={handleOrderClick} />
        </DataContext.Provider>
        
      </main>
      {modalOrderDetailsIsOpen &&  <Modal isOpen={modalOrderDetailsIsOpen} onClose={handleCloseModal}><OrderDetails orderData={orderData} /></Modal>}
      {selectedIngredient && <Modal isOpen={selectedIngredient ? true : false} onClose={handleCloseModal}><IngredientDetails ingredient={selectedIngredient} /></Modal>}
    </div>
  );
}

export default App;
