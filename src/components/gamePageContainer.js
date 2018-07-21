import React, { PureComponent } from 'react'
import GamePage from './gamePage'
import { newGame, makeGuess } from './../actions/game'
import { connect } from 'react-redux'
import {randomWord, showGuess, wrongGuessCount, gameFinished, wrongGuessLimit, isWinner} from '../lib/game'


class GamePageContainer extends PureComponent {

  startNewGame = () => {
    const word = randomWord()
    this.props.newGame(word)
  }
  makeAGuess = (letter) => {
    this.props.makeGuess(letter)
  }
  render() {
    //Game variables
    const gamestate = this.props.gamestate
    const playerHasWon = isWinner(gamestate.wordToGuess, gamestate.usedLetters)
    const gameOver = gameFinished(gamestate.wordToGuess, gamestate.usedLetters)
    const usedLettersArray = gamestate.usedLetters
    const userLettersLength = gamestate.usedLetters.length
    const wordToGuess = gamestate.wordToGuess
    const maskedWord = showGuess(wordToGuess, usedLettersArray)
    const wrongGuessNum = wrongGuessCount(wordToGuess, usedLettersArray)
    const currentGuessCount = userLettersLength.length

    return(
      <div>
        <GamePage gamestate={this.props.gamestate} startNewGame={this.startNewGame} makeAGuess={this.makeAGuess} wrongGuessCount={wrongGuessCount} showGuess={showGuess} gameFinished={gameFinished} wrongGuessLimit={wrongGuessLimit} isWinner={isWinner} 
        currentGuessCount={currentGuessCount}
        />   
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gamestate: state.gamestate
  }
}

export default connect(mapStateToProps,{newGame, makeGuess})(GamePageContainer) 

