import * as React from 'react'
import { Card, CardText, CardBody, Button, Form, FormGroup , Label, Input, Container, Col} from 'reactstrap';
import hangmanIconS from '../img/hangman-icon-s.png'
import '../styles/gamePage.css'
import {Link} from 'react-router-dom'


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
      <Container>
        <Col className="md-6">
          <Card>
            <CardBody className="text-center">

              {gamestate.wordToGuess === '' && 

                  <div>
                    <img src={hangmanIconS} className="img-fluid rounded mx-auto d-block" alt="hangman-icon"/>
                    <Button onClick={this.handleClick} color="primary" size="l" className="btn btn-primary" >New Game</Button>
                  </div>
          
              }

              {!this.props.gameFinished(gamestate.wordToGuess, gamestate.usedLetters) && 

                <div>
                  <h1>A round of Hangman</h1>
                  <Card>
                    <CardBody>
                      
                      {/* <CardText>Unmasked word: {gamestate.wordToGuess}</CardText> */}
                      <CardText>Word to guess: {this.props.showGuess(wordToGuess, usedLetters)}</CardText>

                      <CardText>Guessed letters: 
                        <p className="guessed-letters">{`|`}{usedLetters.map(((letter,index) =><span><b key={index}>{letter}</b></span>))}{`|`}</p>
                      </CardText>

                      <CardText>Number of wrong guesses = {this.props.wrongGuessCount(wordToGuess, usedLetters)}</CardText>

                      <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                          <Label>
                            <b>Type a letter to make a guess</b>
                            <Input onChange={this.handleChange}type="text" name="letter" value={this.state.letter}/>
                            <Button type="submit">Guess</Button>
                          </Label>
                        </FormGroup>  
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              }

                {gamestate.wordToGuess !== '' && gameIsFinished &&

                  <Card>
                    <CardBody>
                      <Button onClick={this.handleClick} color="primary" className="btn">New Game</Button>
                      <p>The word to guess was: {wordToGuess}</p>
                      <p>You have <b>{isWinner ? 'won!' : 'lost :('}</b> Play another round?</p>
                    </CardBody>
                  </Card>
                }

              </CardBody>
           </Card>
        </Col>
        <Link className="home-link" to="/">Back to the homescreen</Link>
      </Container>  
    )
  }
}
