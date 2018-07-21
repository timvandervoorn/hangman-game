import React, { PureComponent } from 'react'
import GamePage from './gamePage'
import ScoreBoard from './scoreBoard'
import { newGame, makeGuess, storeGame } from './../actions/game'
import { connect } from 'react-redux'
import {randomWord, showGuess, wrongGuessCount, gameFinished, wrongGuessLimit, isWinner} from '../lib/game'


class GamePageContainer extends PureComponent {

  startNewGame = () => {
    const word = randomWord()
    this.props.newGame(word, 1)
    if(this.props.gamestate.wordToGuess !== '') {
      this.storePreviousGame()
    }
  }
  makeAGuess = (letter) => {
    this.props.makeGuess(letter)
  }

  storePreviousGame = () => {
    const previousGuesses = this.props.gamestate.usedLetters
    const previousGuessCount = this.props.gamestate.usedLetters.length
    const previousWord = this.props.gamestate.wordToGuess
    const hasWon = isWinner(previousWord, previousGuesses)
    console.log(hasWon)
    console.log(previousGuessCount)
    const previousGameResults = {
      previousGuesses,
      previousGuessCount,
      previousWord,
      hasWon
    }
    this.props.storeGame(previousGameResults)

  }

  getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  }

  render() {
    const gamestate = this.props.gamestate
    const userLettersLength = gamestate.usedLetters.length
    const currentGuessCount = userLettersLength.length

    return(
      <div>
        <GamePage gamestate={this.props.gamestate} startNewGame={this.startNewGame} makeAGuess={this.makeAGuess} wrongGuessCount={wrongGuessCount} showGuess={showGuess} gameFinished={gameFinished} wrongGuessLimit={wrongGuessLimit} isWinner={isWinner} 
        currentGuessCount={currentGuessCount} />

        {gamestate.wordToGuess !== '' && gameFinished(gamestate.wordToGuess, gamestate.usedLetters) && gamestate.previousGames.length > 0 &&

          <div>
            <ScoreBoard gamestate={this.props.gamestate}/>
          </div>

        }
   
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gamestate: state.gamestate
  }
}

export default connect(mapStateToProps,{newGame, makeGuess, storeGame})(GamePageContainer) 

