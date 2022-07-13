import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter  } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'
import ThemeComponent from "./Components/ThemeComponent"
ReactDOM.render(
  <React.StrictMode>
     <ThemeComponent>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </ BrowserRouter>
    </Provider>
    </ThemeComponent>
  </React.StrictMode>,
  document.getElementById('root')
)


