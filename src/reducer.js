import { CLEAR_CART, INCREASE, DECREASE, REMOVE } from './constants/actions'

// reducer - regular function js -  method to handle store off app
function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case INCREASE: {
      console.log('you increased')
      return { ...state }
    }
    case DECREASE: {
      console.log('you decreased')
      return { ...state }
    }
    case REMOVE: {
      console.log('removed')
      console.log(action.payload.id)
      return { ...state }
    }
    default:
      return state
  }
}

export default reducer
