export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'
export const STORE_GAME = 'STORE_GAME'

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

export const storeGame = (game) => {
    return {
        type: STORE_GAME,
        payload: game
    }
}