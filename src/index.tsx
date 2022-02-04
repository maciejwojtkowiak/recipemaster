import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store/store'
import {BrowserRouter} from "react-router-dom"
import {ChakraProvider} from '@chakra-ui/react'


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);



