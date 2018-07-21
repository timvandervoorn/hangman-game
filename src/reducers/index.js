import { combineReducers } from 'redux'
import gamestateReducer from './game_reducer'

export default combineReducers({
  gamestate: gamestateReducer
}) 