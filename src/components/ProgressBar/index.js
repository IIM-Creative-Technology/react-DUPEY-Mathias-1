import React, { Fragment } from 'react';

//Composant de type fonction 
const ProgressBar = ({idQuestion, MaxQuestions}) => {

  const getWidth = (totalQuestion, questionId) =>{
    return (100/ totalQuestion) * questionId;
  }

  const actualQuestion = idQuestion + 1;
  getWidth(MaxQuestions, actualQuestion);
  const progress = getWidth(MaxQuestions, actualQuestion);

  return (
    <Fragment> 
    <div className="percentage">
       <div className="progressPercent"> {`Question : ${idQuestion + 1}/${MaxQuestions} `} </div> 
       <div className="progressPercent">{`Progression : ${progress}%`}</div>
       </div>
       <div className="progressBar">
        <div className="progressBarChange" style={{width:`${progress}%`}}></div>
       </div>
    
    </Fragment>
  );
}
export default React.memo(ProgressBar)