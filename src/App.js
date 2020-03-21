import React from 'react'
import { Provider } from 'react-redux';
import Main from './container/Main'
import Main2 from './container/Main2'

import './App.css';
import store from './store';


export default function App() {
  return (
    <Provider store={store}>
      <Main></Main>
      {/* <Main2></Main2> */}
    </Provider>
  )
}
