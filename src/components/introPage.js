import * as React from 'react'
import { Link } from 'react-router-dom'
import hangmanPic from '../img/hangman-pic.jpg' 
import {Container, Col} from 'reactstrap';


export default function introPage() {
  return (
    <Container>
        <Col className="md-6">
            <div className="text-center"> 
                <img src={hangmanPic} alt="hangman" className="rounded mx-auto d-block img-fluid"/>
                <p className="text-center">Ready for endless random words?</p>
                <Link to="/hangman"><button className="btn btn-primary" >LET'S PLAY</button></Link>
            </div>
        </Col>   
    </Container>
  )
}