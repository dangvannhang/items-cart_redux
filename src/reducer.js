import { CLEAR_CART } from './constants/actions'
// reducer - regular function js -  method to handle store off app
function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], total: 0, amount: 0 }
  }

  console.log('otherr value')
  return state
}

export default reducer
