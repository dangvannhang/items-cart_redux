import { createStore } from 'redux'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { cartItems } from './cartItems'
import reducer from './reducer'
import { Provider } from 'react-redux'
import './App.css'

// contain all state of app
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
}

// create a store with all state and method to handle all state
const store = createStore(reducer, initialStore)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
