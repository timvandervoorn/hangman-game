import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import gamePageContainer from './components/gamePageContainer';
import introPageContainer from './components/introPageContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <div>
          <Route exact path="/" component={introPageContainer}/>
          <Route exact path="/hangman" component={gamePageContainer}/>
        </div>  
      </Provider>
    );
  }
}

export default App;
