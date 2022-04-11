import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import PersonIcon from '../constants/icons/personIcon';
import ChallengePageCircleIcon from '../constants/icons/challengePageCircleIcon';
import { useScore } from '../context/score';



function ChallengePage() {

    const { score, addScore, totalQuestion, addTotalQuestion, correctAnswers, addCorrectAnswers, tour, setStep, newQuestion, addNewResult } = useScore();

    const [color, setColor] = useState("white");
    const [color2, setColor2] = useState("white");
    const [color3, setColor3] = useState("white");

    const buttonDisable = (value) => {
        document.getElementById("button1").disabled = value;
        document.getElementById("button2").disabled = value;
        document.getElementById("button3").disabled = value;
    }

    const Clicked = (clickValue, result) => {
        if (clickValue == (newQuestion?.firstNumber * newQuestion?.secondNumber)) {
            if (result === 'result1') {
                setColor("black");
                document.body.style = 'background: green;';
                buttonDisable(true);

                setTimeout(() => {
                    buttonDisable(false);

                    setColor("white");
                    document.body.style.background = "#2D2D2D";
                    setStep((prevStep) => prevStep + 1);
                    addTotalQuestion(1);
                    addScore(Math.floor(Math.sqrt(newQuestion?.firstNumber * newQuestion?.secondNumber)));
                    addCorrectAnswers(1);
                    addNewResult(newQuestion?.firstNumber, newQuestion?.secondNumber, (newQuestion?.firstNumber * newQuestion?.secondNumber), true);
                }, 3000);
            }
            else if (result === 'result2') {
                setColor2("black");
                document.body.style = 'background: green;';
                buttonDisable(true);

                setTimeout(() => {
                    buttonDisable(false);
                    setColor2("white");
                    document.body.style.background = "#2D2D2D";
                    setStep((prevStep) => prevStep + 1);
                    addCorrectAnswers(1);
                    addTotalQuestion(1);
                    addScore(Math.floor(Math.sqrt(newQuestion?.firstNumber * newQuestion?.secondNumber)));
                    addNewResult(newQuestion?.firstNumber, newQuestion?.secondNumber, (newQuestion?.firstNumber * newQuestion?.secondNumber), true);
                }, 3000);
            }
            else if (result === 'result3') {
                setColor3("black");
                document.body.style = 'background: green;';
                buttonDisable(true);
                setTimeout(() => {
                    buttonDisable(false);
                    setColor3("white");
                    document.body.style.background = "#2D2D2D";
                    setStep((prevStep) => prevStep + 1);
                    addTotalQuestion(1);
                    addCorrectAnswers(1);
                    addScore(Math.floor(Math.sqrt(newQuestion?.firstNumber * newQuestion?.secondNumber)));
                    addNewResult(newQuestion?.firstNumber, newQuestion?.secondNumber, (newQuestion?.firstNumber * newQuestion?.secondNumber), true);
                }, 3000);
            }
        }
        else {
            if (result === 'result1') {
                if (newQuestion?.result2 == (newQuestion?.firstNumber * newQuestion?.secondNumber)) {
                    setColor2("green");
                    setColor('black');
                    document.body.style = 'background: red;';
                    buttonDisable(true);
                    setTimeout(() => {
                        buttonDisable(false);
                        setColor("white");
                        setColor2("white");
                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);
                        addTotalQuestion(1);
                        addNewResult(newQuestion?.firstNumber, newQuestion?.secondNumber, (newQuestion?.firstNumber * newQuestion?.secondNumber), false);
                    }, 3000);
                }
                else {
                    setColor3("green");
                    setColor('black');
                    document.body.style = 'background: red;';
                    buttonDisable(true);
                    setTimeout(() => {
                        buttonDisable(false);
                        setColor("white");
                        setColor3("white");
                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);
                        addTotalQuestion(1);
                        addNewResult(newQuestion?.firstNumber, newQuestion?.secondNumber, (newQuestion?.firstNumber * newQuestion?.secondNumber), false);
                    }, 3000);
                }
            }
            else if (result === 'result2') {
                if (newQuestion?.result1 == (newQuestion?.firstNumber * newQuestion?.secondNumber)) {
                    setColor("green");
                    setColor2('black');
                    document.body.style = 'background: red;';
                    buttonDisable(true);
                    setTimeout(() => {
                        buttonDisable(false);
                        setColor("white");
                        setColor2("white");
                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);
                        addTotalQuestion(1);
                        addNewResult(newQuestion?.firstNumber, newQuestion?.secondNumber, (newQuestion?.firstNumber * newQuestion?.secondNumber), false);
                    }, 3000);
                }
                else {
                    setColor3("green");
                    setColor2('black');
                    document.body.style = 'background: red;';
                    buttonDisable(true);
                    setTimeout(() => {
                        buttonDisable(false);
                        setColor2("white");
                        setColor3("white");
                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);
                        addTotalQuestion(1);
                        addNewResult(newQuestion?.firstNumber, newQuestion?.secondNumber, (newQuestion?.firstNumber * newQuestion?.secondNumber), false);

                    }, 3000);
                }
            }
            else {
                if (newQuestion?.result2 == (newQuestion?.firstNumber * newQuestion?.secondNumber)) {
                    setColor2("green");
                    setColor3('black');
                    document.body.style = 'background: red;';
                    buttonDisable(true);
                    setTimeout(() => {
                        buttonDisable(false);
                        setColor3("white");
                        setColor2("white");
                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);
                        addTotalQuestion(1);
                        addNewResult(newQuestion?.firstNumber, newQuestion?.secondNumber, (newQuestion?.firstNumber * newQuestion?.secondNumber), false);
                    }, 3000);
                }
                else {
                    setColor("green");
                    setColor3('black');
                    document.body.style = 'background: red;';
                    buttonDisable(true);
                    setTimeout(() => {
                        buttonDisable(false);
                        setColor("white");
                        setColor3("white");
                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);
                        addTotalQuestion(1);
                        addNewResult(newQuestion?.firstNumber, newQuestion?.secondNumber, (newQuestion?.firstNumber * newQuestion?.secondNumber), false);
                    }, 3000);
                }
            }
        }
    }

    return (
        totalQuestion === 10 ?
            <Navigate to="/result_page" />
            :
            <>
                <div className='challenge-page-container'>

                    <div className='person-icon'>
                        <PersonIcon />
                    </div>
                    <div className='challenge-page-question'>{newQuestion?.firstNumber} x {newQuestion?.secondNumber}</div>

                    <div className='challenge-page-score-container'>

                        <div className='challenge-page-score-table'>

                            <div className='challenge-page-text'>Score: {score}</div>
                            <div className='challenge-page-text'>Tour: {tour}</div>
                            <div className='challenge-page-text'>Questions: {correctAnswers}/{totalQuestion}</div>

                        </div>

                        <div className='icon1'>
                            <ChallengePageCircleIcon color={color} />
                            <button id="button1" className='result1' onClick={() => Clicked(newQuestion?.result1, 'result1')}>
                                {newQuestion?.result1}
                            </button>
                        </div>

                        <div className='icon2'>
                            <ChallengePageCircleIcon color={color2} />
                            <button id="button2" className='result2' onClick={() => Clicked(newQuestion?.result2, 'result2')}>
                                {newQuestion?.result2}
                            </button>
                        </div>

                        <div className='icon3'>
                            <ChallengePageCircleIcon color={color3} />
                            <button id="button3" className='result3' onClick={() => Clicked(newQuestion?.result3, 'result3')}>
                                {newQuestion?.result3}
                            </button>
                        </div>

                    </div>
                </div>
            </>
    )
}

export default ChallengePage