import React, { Fragment, Component } from 'react'
import Chen from '../../Asset/Chen.png'
import Card from './Card'
import Meteo from './Meteo'

class Home extends Component {

 
  render() {
    return (
      <Fragment> 
      <div className="App">
        <h1>Le professeur Chen, est là pour vous servir</h1>
        <img src={Chen} alt="Professeur Chen"></img>
      
      </div>
      <Card/>
      <Meteo/>
      </Fragment>
    )
  }
}

export default Home
