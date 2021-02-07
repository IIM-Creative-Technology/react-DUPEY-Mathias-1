import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


// use effect va jouer le role de component didmount et didupdate

  const EndQuizz = React.forwardRef((props , ref) => {

    const {themesNames, 
      score , 
      maxQuestions, 
      percent} = props;

    const [asked, setasked] = useState([]);

    useEffect(()=>{
      setasked(ref.current)
    }, [ref])

    
   const questionAnswer =  asked.map( question => {
      return (
        <tr key={question.id}>
          <td>{question.question}</td>
          <td>{question.answer}</td>
          <td>
            <button className="btnInfo">Infos</button>
          </td>
        </tr>
      )
    }) 
    //

    return (
      <Fragment> 
      <div className="stepsBtnContainer">
        <p className="successMsg"> Bravo, voici votre score ! </p>
          <button className="btnResult success">Retour à l'accueil
          <Link to='/' className='nav-links'/>
          </button>
      </div>
      <div className="percentage">
        <div className="progressPercent">Réussite : {percent} % </div>
        <div className="progressPercent">Note: {score}/ 10 </div>
      </div>
      <hr></hr>
      <p> Les réponses aux questions posées : </p>
      <div className="answerContainer">
        <table className="answers">
          <thead>
            <tr>
              <th>Question</th>
              <th> Vos réponses</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
          {questionAnswer}
          </tbody>
        </table>
      </div>
      </Fragment>
    );
  })


export default React.memo(EndQuizz)
