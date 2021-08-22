import { createStore } from 'redux'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import reducer from './reducer'
import { Provider } from 'react-redux'
import './App.css'

// create a store with all state and method to handle all state
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
