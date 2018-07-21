import * as React from 'react'
import { Card,CardBody, Container, Col} from 'reactstrap';
import '../styles/scoreBoard.css'
 
export default function ScoreBoard(props) {
  return (
    <Container>
        <Col className="md-6">
            <Card>
                <CardBody> 
                    <Card>
                        <CardBody>
                            {props.gamestate.previousGames.length > 0 && 
                               <div>
                                   <h1>Previous games</h1>
                                   <p>You have played {props.gamestate.previousGames.length + 1} in total!</p>
                                    {props.gamestate.previousGames.map((game,index) => {
                                        return (
                                            <div key={index + 1}>
                                                <h4 className="previous-game-heading" key={game}>Game {index + 1}</h4>             <ul key={index}className="list-group">
                                                    <li className="list-group-item" key={game.hasWon}>For this game you were <b>{game.hasWon ? 'victorious' : 'just a loser'}</b></li>
                                                    <li className="list-group-item" key={game.previousWord}>The word to guess was: <b>{game.previousWord}</b></li>
                                                    <li className="list-group-item" key={game.previousGuessCount}>The number of total guesses was: <b>{game.previousGuessCount}</b></li>
                                                </ul>
                                            </div>
                                        )   
                                    })}         
                                </div>
                            }
                        </CardBody>
                    </Card>
                </CardBody> 
            </Card> 
        </Col>   
    </Container>
  )
}

