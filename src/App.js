import { createStore } from 'redux'
import { DECREASE, INCREASE, CHANGE_NAME } from './constant'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { cartItems } from './cartItems'
import './App.css'

// contain all state of app
const initialStore = {
  count: 5,
  name: 'nhang',
}

// reducer - regular function js -  method to handle store off app
function reducer(state, action) {
  if (action.type === DECREASE) {
    console.log('decrease')
    return { ...state, count: state.count - 1 }
  }
  if (action.type === INCREASE) {
    console.log('increase')
    return { ...state, count: state.count + 1 }
  }
  if (action.type === CHANGE_NAME) {
    console.log('change_name')
    return { ...state, name: 'nhang_cute' }
  }
  console.log('otherr value')
  return state
}
// create a store with all state and method to handle all state
const store = createStore(reducer, initialStore)
store.dispatch({ type: 'DECREASE' })
store.dispatch({ type: 'INCREASE' })
store.dispatch({ type: 'INCREASE' })
store.dispatch({ type: 'INCREASE' })

function App() {
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
