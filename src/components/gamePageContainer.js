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
    
    return(
      <div>
        <GamePage gamestate={this.props.gamestate} startNewGame={this.startNewGame} makeAGuess={this.makeAGuess} wrongGuessCount={wrongGuessCount} showGuess={showGuess} gameFinished={gameFinished} wrongGuessLimit={wrongGuessLimit} isWinner={isWinner}/>
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

