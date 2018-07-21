export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'
// TODO implement action and rename + rename file.
export const newGame = (randomWord) => {
    return {
        type: NEW_GAME,
        payload: randomWord
    }
}

export const makeGuess = (letter) => {
    return {
      type: MAKE_GUESS,
      payload: letter
    }
}