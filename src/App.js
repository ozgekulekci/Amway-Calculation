import React from 'react'
import { Provider } from 'react-redux';
import Main from './container/Main'
import './App.css';
import store from './store';


export default function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  )
}
