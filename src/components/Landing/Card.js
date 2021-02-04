import React from 'react';
import '../Landing/Card.css';
import CardItem from './CardItem';
import Pokedex from './../../Asset/Pokedex.jpg'
import Conseil from './../../Asset/Conseil.jpg'
import Legende from './../../Asset/Legende.png'
import Pop from './../../Asset/Pop.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>4 types de quizz vous attendent sur notre sites web</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Pokedex}
              text="Quel est ce Pokémon ?"
              label='Arrivrez-vous à trouver les pokémon mystères'
              path='/Quizz'
            />
            <CardItem
              src={Conseil}
              text='Tout le monde a une raison de se battre.'
              label='Connaissez-vous vraiment la ligue Pokémon'
              path='/Quizz'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Legende}
              text="Chaque monde est régie par des légendes"
              label='Les légendes de Pokémon'
              path='/Quizz'
            />
            <CardItem
              src={Pop}
              text='Pokemon dans la Pop Culture'
              label='Pop Culture'
              path='/Quizz'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;