import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import hangmanPic from '../img/hangman-pic.jpg' 


export default function introPage(props) {
  return (
        <div className="container">
            <div className="col md-6">
                <div className="card">
                    <div className="card-body"> 
                        <h1 className="card-title text-center">Welcome to Hangman </h1>
                        <img src={hangmanPic} alt="hangman" className="rounded mx-auto d-block img-fluid"/>
                        <p className="text-center">Ready for endless random words?</p>
                        <Link to="/hangman"><Button color="primary" size="lg" block>Go to the game page</Button></Link>
                    </div>
                </div> 
            </div>   
        </div>
  )
}