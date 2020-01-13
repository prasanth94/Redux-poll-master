import authedUser from './authedUser'
import users from './users'
import polls './polls'
import {combineReducers} from 'redux'

export default combineReducers({
  authedUser,
  users,
  polls,
})
