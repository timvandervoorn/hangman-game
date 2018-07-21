import * as React from 'react'
import { Link } from 'react-router-dom'


export default function introPage(props) {
  return (
    <div className="container">
            <div className="col md-6 margin-auto">
                <div className="card">
                    <div className="card-body"> 
                        <h1 className="card-title">Welcome to Hangman </h1>
                        <Link to="/hangman"><button className="btn btn-primary">Go to the game page</button></Link>
                    </div>
                </div> 
            </div>   
        </div>
  )
}