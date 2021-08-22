import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  REMOVE,
  GET_TOTALS,
} from './constants/actions'

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
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        if (cartItem.amount <= 0) {
        }
        return cartItem
      })

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
    case GET_TOTALS: {
      console.log('get total')
      let { total, amount } = state.cart.reduce(
        // gia tri thang du, gia tri moi vong lap
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount
          cartTotal.total += itemTotal

          cartTotal.amount += amount
          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      // only get 2 digit after ,
      total = parseFloat(total.toFixed(2))
      return { ...state, total, amount }
    }
    default:
      return state
  }
}

export default reducer
