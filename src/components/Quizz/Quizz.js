import React, { Component, Fragment } from 'react'
import Index from '../Levels/Index';
import ProgressBar from '../ProgressBar'
import {QuizzPokemon} from '../QuizzPokemon/'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import EndQuizz from '../EndQuizz'

toast.configure();

class Quizz extends Component {

  state = {
    themeNames:["legende","ligue","pop"],
    MaxQuestions : 10,
    //quizLevel:0 , on veut pas écrémenter donc on sélectionne juste , l'index 0
    stockQuestions: [],
    question: null,
    options: [],
    idQuestion: 0,
    btnDisabled: true,
    userAnswe:null,
    score : 0,
    /**mathias */
    quizOver: false
  }

  storedDataRef = React.createRef();

  loadedQuestions = theme =>{
   const legendeQuestion =QuizzPokemon[0].quizz[theme]; // Ceci c'est le tableau de question Légende
   if(legendeQuestion.length >= this.state.MaxQuestions){

    this.storedDataRef.current = legendeQuestion;
    
   const newArray = legendeQuestion.map( ({answer, ...keepRest}) => keepRest); //enleve les réponses
   this.setState({
     stockQuestions : newArray
   })

  } else {
    console.log("Les questions ne sont pas fini")
  }
  }

  componentDidMount () {
    // Comme la classe est juste au dessus on insère le this
    
    this.loadedQuestions(this.state.themeNames[0])
  }

  nextQuestion = () => {
     //On vas comparer idQuestion à Maxquestions -1
     if(this.state.idQuestion === this.state.MaxQuestions -1){  // On verifie si on est pas à la derniere question
      this.EndQuizz();
    } else {
        this.setState( prevState=>({
          idQuestion : prevState.idQuestion + 1 // qui va incrémenter le state score
        }) )
    }
    const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer; // tableau legende question que l'on cible , et on récupère la réponse

    if (this.state.userAnswer === goodAnswer){ //On compare la réponse et la selection de l'utilisateur
        this.setState( prevState => ({  
          score: prevState.score + 1 // on incrémente donc le score de l'utilsateur
        }))
        toast.success('🦄 Bravo +1pt', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
    
          });

    } else {
      toast.error(' Raté 0 pt !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      
        });
    };

  }

 
  componentDidUpdate(prevProps, prevState) {
    if(this.state.stockQuestions !== prevState.stockQuestions) {
        this.setState({
            question: this.state.stockQuestions[this.state.idQuestion].question, //permet de cibler les question de l'array
            options: this.state.stockQuestions[this.state.idQuestion].options
        })
    }

    

    if (this.state.idQuestion !== prevState.idQuestion) { // on switch d'id de question donc on switch de question gràce a prevState
      this.setState({
        question: this.state.stockQuestions[this.state.idQuestion].question, //permet de cibler les question de l'array
        options: this.state.stockQuestions[this.state.idQuestion].options,
        userAnswer : null, // on vide la réponse de l'utilisateur
        btnDisabled: true,



      })
    }


  }

  submitAnswer = selectedAnswer => {
      this.setState({
        userAnswer: selectedAnswer,
        btnDisabled: false,
      })
  }
/**mathias */
  EndQuizz = () => {
      this.setState({
        quizOver: true
      })
  }
/**mathias */
 


  render() {

   const displayOptions = this.state.options.map((options, index) => {
      return(
        <p key={index} 
        className={`answerOptions ${this.state.userAnswer === options ? "selected" : null}`} // Tu rajoutes la class selected, a la réponse sur laquelle j'ai cliqué
        onClick={() => this.submitAnswer(options)} // Fonction qui se lance seulement au click sur une option, elle activera le bouton suivant 
        >
          
          {options}</p>
      )
    })

  return  this.state.quizOver ? ( // si quizz Over retourne true alors on affiche end Quizz le récap des questions
      <EndQuizz/>
    )
    :
    (
      
      <Fragment>
      <Index/>
      <ProgressBar/>
      <h2> {this.state.question} </h2> 

        {displayOptions}

      <button disabled={this.state.btnDisabled} 
      className="btnSubmit"
      onClick={this.nextQuestion}
      >Suivant</button>
    </Fragment>

     
    )
  }
}

export default Quizz
