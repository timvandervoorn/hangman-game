import React, { PureComponent } from 'react'
import GamePage from './gamePage'
import ScoreBoard from './scoreBoard'
import { newGame, makeGuess, storeGame } from './../actions/game'
import { connect } from 'react-redux'
import {randomWord, showGuess, wrongGuessCount, gameFinished, isWinner} from '../lib/game'


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
    const previousGameResults = {
      previousGuesses,
      previousGuessCount,
      previousWord,
      hasWon
    }
    this.props.storeGame(previousGameResults)
  }

  render() {
    const gamestate = this.props.gamestate
    return(
      <div>

        <GamePage gamestate={gamestate} startNewGame={this.startNewGame} makeAGuess={this.makeAGuess} wrongGuessCount={wrongGuessCount} showGuess={showGuess} gameFinished={gameFinished} isWinner={isWinner} />

        {gamestate.wordToGuess !== '' && gameFinished(gamestate.wordToGuess, gamestate.usedLetters)  &&

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

