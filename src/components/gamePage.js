import * as React from 'react'
import { Card, CardText, CardBody, Button, Form, FormGroup , Label, Input, Container, Col} from 'reactstrap';


import '../styles/gamePage.css'
import {Link} from 'react-router-dom'


export default class GamePage extends React.PureComponent {

  state = {
    letter: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase()
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
                    <img src={require(`../img/hangman-stage-0.svg`)} className="hangman-image img-fluid rounded mx-auto d-block" alt="hangman-icon"/>
                    <Button onClick={this.handleClick} color="primary" size="l" className="btn btn-primary" >START GAME</Button>
                  </div>
          
              }

              {!this.props.gameFinished(gamestate.wordToGuess, gamestate.usedLetters) && 

                <div>
                  <h1>A round of Hangman</h1>
                  <Card>
                    <CardBody>
                      <CardText>Word to guess: {this.props.showGuess(wordToGuess, usedLetters)}</CardText>
                      <CardText>Guessed letters:</CardText>
                      <p className="guessed-letters">=>{usedLetters.map(((letter,index) =><span key={index}><b key={index}>{letter}</b></span>))}</p>
                      <CardText>Number of wrong guesses = {this.props.wrongGuessCount(wordToGuess, usedLetters)} / 6</CardText>
                      <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                          <Label>
                            <b>Type a letter to make a guess</b>
                            <Input onChange={this.handleChange}type="text" name="letter" value={this.state.letter}/>
                            {this.state.letter.length > 1 && <p>MAKE SURE TO ONLY PROVIDE 1 LETTER!</p>}
                            <Button type="submit">Guess</Button>
                          </Label>
                        </FormGroup>  
                      </Form>
                      <img src={require(`../img/hangman-stage-${this.props.wrongGuessCount(wordToGuess, usedLetters)}.svg`)} className="img-fluid rounded mx-auto d-block hangman-image" alt="hangman-icon"/>
                    </CardBody>
                  </Card>
                </div>

              }

                {gamestate.wordToGuess !== '' && gameIsFinished &&

                  <Card>
                    <CardBody>
                      <Button onClick={this.handleClick} color="primary" className="btn">NEW GAME</Button>
                      <p>The word to guess was: <b>{wordToGuess}</b></p>
                      <p>You have <b>{isWinner ? 'won!' : 'lost :('}</b> Play another round?</p>
                      {!isWinner && <img src={require(`../img/hangman-stage-${6}.svg`)} className="img-fluid rounded mx-auto d-block hangman-image" alt="hangman-icon"/>}
                      {isWinner && <img src={require(`../img/hangman-stage-win.svg`)} className="img-fluid rounded mx-auto d-block hangman-image" alt="hangman-icon"/>}
                     
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
