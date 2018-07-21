import * as React from 'react'
import { Card,CardBody, Container, Col} from 'reactstrap';
 
export default function ScoreBoard(props) {
  return (
    <Container>
        <Col className="md-6">
            <Card>
                <CardBody> 
                    <Card>
                        <CardBody>
                            <h1 className="text-center">Previous Games</h1>
                            <ul className="list-group">
                                {props.gamestate.previousWords.map((word,index) => <li className="list-group-item" key={index}>Word for game {index + 1} was: <b>{word}</b></li>)}
                            </ul>
                        </CardBody>
                    </Card>
                </CardBody> 
            </Card> 
        </Col>   
    </Container>
  )
}

