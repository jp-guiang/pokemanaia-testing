import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import Team from './components/Team'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
      <Home />
      <Pokemon />
      <Team />
    </Provider>,
    document.getElementById('app')
  )
})
