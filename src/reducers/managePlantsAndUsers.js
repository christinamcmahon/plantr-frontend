import { combineReducers } from 'redux'
import plantsReducer from './plantsReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
    plants: plantsReducer,
    users: usersReducer
})

export default rootReducer