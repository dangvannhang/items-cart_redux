import { DECREASE, INCREASE, CHANGE_NAME } from './constant'
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

export default reducer
