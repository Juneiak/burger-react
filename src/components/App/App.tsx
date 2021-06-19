import React from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';

function App() {
  return (
    <div className={AppStyles.app}>
      <AppHeader />
    </div>
  );
}

export default App;
