import React, { useState } from 'react'
import FirstPageCircleIcon from '../constants/icons/firstPageCircleIcon';
import ResultBarIcon from '../constants/icons/resultBarIcon';
import QuestionBarIcon from '../constants/icons/questionBarIcon';
import CorrectIcon from '../constants/icons/correctIcon';
import IncorrectIcon from '../constants/icons/incorrectIcon';
import { useScore } from '../context/score';



import { Link } from "react-router-dom";

function ResultPage() {
  const { addTour, totalQuestion, correctAnswers, score, resultAnswers, clearResults } = useScore();

  const [aggregateScore] = useState(localStorage.getItem("AggregateScore"));
  const [aggregateQuestion] = useState(localStorage.getItem("AggregateQuestion"));
  const [aggregateCorrectAnswers] = useState(localStorage.getItem("AggregateCorrectAnswers"));

  const addScoreLocalStorage = (d) => {
    if (!aggregateScore) {
      localStorage.setItem("AggregateScore", JSON.stringify(d));
    }
    else {
      let total = localStorage.getItem("AggregateScore");
      let result = parseInt(total) + score;
      localStorage.setItem("AggregateScore", JSON.stringify(result));
    }
  }

  const addQuestionLocalStorage = (d) => {
    console.log(d);
    if (!aggregateQuestion) {
      localStorage.setItem("AggregateQuestion", JSON.stringify(d));
    }
    else {
      let total = localStorage.getItem("AggregateQuestion");
      let result = parseInt(total) + totalQuestion;
      localStorage.setItem("AggregateQuestion", JSON.stringify(result));
    }
  }

  const addCorrectAnswersLocalStorage = (d) => {
    if (!aggregateCorrectAnswers) {
      localStorage.setItem("AggregateCorrectAnswers", JSON.stringify(d));
    }
    else {
      let total = localStorage.getItem("AggregateCorrectAnswers");
      let result = parseInt(total) + correctAnswers;
      localStorage.setItem("AggregateCorrectAnswers", JSON.stringify(result));
    }
  }



  return (
    <>
      <div className='result-page-container'>
        <div className='result-page-final'>

          <div className='result-page-title'>Final</div>
          <ResultBarIcon />

          <div className='final-container'>
            <div className='final-text'>Point: {score}</div>
            <div className='final-text'>Questions: {totalQuestion}</div>
            <div className='final-text'>Correct Answers: {correctAnswers}</div>
          </div>

          <FirstPageCircleIcon />

          <Link to="/challenge_page">
            <span className='restart-button' onClick={() => { addTour(1); clearResults(); addScoreLocalStorage(score); addQuestionLocalStorage(totalQuestion); addCorrectAnswersLocalStorage(correctAnswers); }}>Restart</span>
          </Link>

        </div>

        <div>
          <div className='result-page-title'>All Question</div>
          <QuestionBarIcon />
          <div>
            {
              resultAnswers.map(item => (
                <QuestionResultCard firstNumber={item.firstNumber} secondNumber={item.secondNumber} result={item.result} isCorrect={item.isCorrect} ></QuestionResultCard>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

const QuestionResultCard = ({ firstNumber, secondNumber, result, isCorrect }) => {
  return (
    <div className='question-result-card'>
      <div className='question-text'>{firstNumber} x {secondNumber} = {result}</div>
      {
        isCorrect ?
          <div className='correct-icon'><CorrectIcon /></div>
          :
          <div className='correct-icon'><IncorrectIcon /></div>
      }
    </div>
  );
}

export default ResultPage