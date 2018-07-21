import { combineReducers } from 'redux'
import gamestateReducer from './randomWord_reducer'

export default combineReducers({
  gamestate: gamestateReducer
}) 