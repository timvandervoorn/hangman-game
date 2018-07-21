import {NEW_GAME, MAKE_GUESS, STORE_GAME} from '../actions/game'

const initialState = {
  usedLetters: [],
  wordToGuess: '',
  previousWords: [],
  previousGames: []
}

export default (state = initialState, action = {}) => {
  switch(action.type){
      case NEW_GAME:
          return {
            ...state,
            usedLetters: [],
            wordToGuess: action.payload,
            previousWords: state.previousWords.concat(action.payload)
          }
      case MAKE_GUESS:
          return {
            ...state,
            usedLetters: state.usedLetters.concat(action.payload)
          }
      case STORE_GAME:
          return {
            ...state,
            previousGames: state.previousGames.concat(action.payload)
          }
      default:
          return state
  }
}

// previousGames: {
//   previousWord: action.payload,
//   gameId: 1
// }

