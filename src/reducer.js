import { CLEAR_CART, INCREASE, DECREASE, REMOVE } from './constants/actions'

// reducer - regular function js -  method to handle store off app
function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case INCREASE: {
      console.log('you increased')
      // crease a new array
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
      return { ...state, cart: tempCart }
    }
    case DECREASE: {
      console.log('you decreased')
      let tempCart = []
      if (action.payload.amount === 1) {
        console.log(`hey it is one`)
        tempCart = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        )
      } else {
        tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
          if (cartItem.amount <= 0) {
          }
          return cartItem
        })
      }
      return {
        ...state,
        cart: tempCart,
      }
    }
    case REMOVE: {
      console.log('removed')
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }
    }
    default:
      return state
  }
}

export default reducer
