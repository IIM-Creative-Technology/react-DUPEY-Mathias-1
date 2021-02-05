import Home from './components/Landing/Home'
import Navbar from './components/Header/Navbar'
import PresentationQuizz from './components/Quizz/PresentationQuizz'
import React, { Fragment} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom"
import Quizz from './components/Quizz/Quizz'


function App () {
    return (
      <Fragment> 
   
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/PresentationQuizz" exact component={PresentationQuizz} />
        <Route path="/Quizz" exact component={Quizz} />
      </Switch>
      </Router>
    
   
 
    </Fragment>
  );
}

export default App;
