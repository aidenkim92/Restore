import ReactDOM from 'react-dom/client';
import './app/layout/styles.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store/configureStore';
import { router } from './app/router/Routes';
import React from 'react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  //<React.StrictMode> // this will load twice every time on dev Environment
    <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  //</React.StrictMode>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
