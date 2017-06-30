import { combineReducers } from 'redux'
import userSearcherReducer from './userSearcher'

export default combineReducers({
    users: userSearcherReducer
})