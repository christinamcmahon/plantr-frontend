import { combineReducers } from 'redux'
import plantsReducer from './plantsReducer'
import usersReducer from './usersReducer'

// console.log(usersReducer)
const rootReducer = combineReducers({
    plantsReducer: plantsReducer,
    usersReducer: usersReducer
})

export default rootReducer