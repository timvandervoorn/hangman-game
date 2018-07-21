import * as React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardText, CardBody, CardTitle, Button, Form, FormGroup , Label, Input} from 'reactstrap';
import hangmanIconS from '../img/hangman-icon-s.png'
import '../styles/gamePage.css'
import ScoreBoardContainer from './scoreBoardContainer'


export default class GamePage extends React.PureComponent {

  state = {
    letter: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
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
    const wordToGuess = gamestate.wordToGuess
    const usedLetters = gamestate.usedLetters
    
    return(
      <div className="container">
          <div className="col md-6">
            <div className="card">
                <div className="card-body text-center">

                {gamestate.wordToGuess === '' && 

                  <div className="card" >
                    <div className="card-body">
                      <img src={hangmanIconS} className="img-fluid rounded mx-auto d-block"/>
                      <Button onClick={this.handleClick} color="primary" size="l" className="btn btn-primary" >New Game</Button>
                    </div>
                  </div>

                }

                {!this.props.gameFinished(gamestate.wordToGuess, gamestate.usedLetters) && 
                  <div>
                    <h1>A round of Hangman</h1>
                    <div className="card">
                      <div className="card-body">
                        
                        <CardText>Unmasked word: {gamestate.wordToGuess}</CardText>
                        <CardText>Word to guess: {this.props.showGuess(wordToGuess, usedLetters)}</CardText>

                        <CardText>Guessed letters: 
                          {usedLetters.map(((letter,index) =><b key={index}>{letter}</b>))}
                        </CardText>

                        <CardText>Number of wrong guesses = {this.props.wrongGuessCount(wordToGuess, usedLetters)}</CardText>

                        <Form onSubmit={this.handleSubmit}>
                          <FormGroup>
                            <Label>
                              Type a letter to make a guess
                              <Input onChange={this.handleChange}type="text" name="letter" value={this.state.letter}/>
                              <Button type="submit" className="btn btn-primary">Guess</Button>
                            </Label>
                          </FormGroup>  
                        </Form>
                      </div>
                    </div>
                  </div>
                }

                {gamestate.wordToGuess !== '' && gameIsFinished &&

                  <div className="card">
                    <div className="card-body">
                      <Button onClick={this.handleClick} color="primary" lassName="btn btn-primary">New Game</Button>
                      <p>The word to guess was: {wordToGuess}</p>
                      <p>You have <b>{isWinner ? 'won!' : 'lost :('}</b> Play another round?</p>
                    </div>
                  </div>
                }

                {gamestate.wordToGuess !== '' && 
                  <div>
                    <ScoreBoardContainer />
                  </div>
                }


                <Link to="/">Back to the homescreen</Link>
              </div>
          </div>
          </div>
      </div>  
    )
  }
}
