import * as React from 'react'
import { Link } from 'react-router-dom'

export default class GamePage extends React.PureComponent {

  state = {
    letter: ''
  }
  
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.makeAGuess(this.state.letter)
    this.setState({
      letter: ''
    })
  }

  handleClick = () => {
    this.props.startNewGame();
  }

  render() {
    const gamestate = this.props.gamestate
    const isWinner = this.props.isWinner(gamestate.wordToGuess, gamestate.usedLetters)
    const gameIsFinished = this.props.gameFinished(gamestate.wordToGuess, gamestate.usedLetters)
    console.log(isWinner)
    console.log(gameIsFinished)
    return(
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">HANGMAN</h5>

           {gamestate.wordToGuess === '' && 
            <div>
              <button onClick={this.handleClick} className="btn btn-primary">New Game</button>
            </div>
           }

          {!this.props.gameFinished(gamestate.wordToGuess, gamestate.usedLetters) && 
            <div>
              <p>Current guess count = {gamestate.usedLetters.length}</p>
              <p>Word to guess is = {gamestate.wordToGuess}</p>
              <p>Masked word from state = {this.props.showGuess(gamestate.wordToGuess, gamestate.usedLetters)}</p>

              <p>Guessed letters: 
                {gamestate.usedLetters.map(((letter,index) =><b key={index}>{letter}</b>))}
              </p>

              <p>Number of wrong guesses = {this.props.wrongGuessCount(gamestate.wordToGuess, gamestate.usedLetters)}</p>

              <form onSubmit={this.handleSubmit}>
                <label>
                  Type a letter to make a guess
                  <input onChange={this.handleChange}type="text" name="letter" value={this.state.letter}/>
                  <button type="submit">Guess</button>
                </label>  
              </form>
            </div>
          }

          {gamestate.wordToGuess !== '' && gameIsFinished &&
            <div>
              <button onClick={this.handleClick} className="btn btn-primary">New Game</button>
                You have <b>{isWinner ? 'won' : 'lost'}</b>. Play another round?
            </div>
          }
          <Link to="/">Back to the homescreen</Link>
        </div>
      </div>
    )
  }
}
