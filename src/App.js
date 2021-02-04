import Home from './components/Landing/Home'
import Navbar from './components/Header/Navbar'
import React, { Fragment} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom"
import Meteo from './components/Landing/Meteo'
import Quizz from './components/Quizz/Quizz'


function App () {
    return (
      <Fragment> 
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Quizz" exact component={Quizz} />
      </Switch>
      </Router>
    </div>
   
 
    </Fragment>
  );
}

export default App;
