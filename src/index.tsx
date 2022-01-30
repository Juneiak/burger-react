import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import initStore from './services/store/store';
import reportWebVitals from './reportWebVitals';
import { App } from './app/app';

export const store = initStore();

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <BrowserRouter>
        <HashRouter basename='/'>
          <App />
          </HashRouter>
        </BrowserRouter>
      </Provider>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
