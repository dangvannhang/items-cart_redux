// setting constant value
const DECREASE = 'DECREASE'
const INCREASE = 'INCREASE'
const REMOVE = 'REMOVE'
const CLEAR_CART = 'CLEAR_CART'
const GET_TOTALS = 'GET_TOTALS'
const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT'
const removeItem = (id) => {
  return { type: REMOVE, payload: { id } }
}

export {
  DECREASE,
  INCREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTALS,
  TOGGLE_AMOUNT,
  removeItem,
}
