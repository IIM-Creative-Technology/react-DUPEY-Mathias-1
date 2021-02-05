import React, { Component } from 'react'
import Index from '../Levels/Index';
import ProgressBar from '../ProgressBar'
import {QuizzLegend} from '../QuizzLegend/'

class Quizz extends Component {
  render() {
    return (
      <div className="App">
        <Index/>
        <ProgressBar/>
        <h2> Notre Question Quiz </h2> 
        <p className="answerOptions">Question 1</p>
        <p className="answerOptions">Question 2</p>
        <p className="answerOptions">Question 3</p>
        <p className="answerOptions">Question 4</p>
        <button className="btnSubmit">Suivant</button>
      </div>
    )
  }
}

export default Quizz
