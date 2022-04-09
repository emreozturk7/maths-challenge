import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import PersonIcon from '../constants/icons/personIcon';
import ChallengePageCircleIcon from '../constants/icons/challengePageCircleIcon';
import { useScore } from '../context/score';
import ResultPage from "../pages/ResultPage";



function ChallengePage() {

    const { score, addScore } = useScore();
    const { question, addQuestion } = useScore();
    const { correctAnswers, addCorrectAnswers } = useScore();
    const { tour, addTour } = useScore();

    const { setStep, newQuestion } = useScore();

    const [denemeColor, setDenemeColor] = useState("white");
    const [denemeColor2, setDenemeColor2] = useState("white");
    const [denemeColor3, setDenemeColor3] = useState("white");

    const falseResult = (result) => {
        if (result === 'result1') {


        }
        else if (result === 'result2') {
            setDenemeColor('green');
            setDenemeColor2('black');
            document.body.style = 'background: red;';
            setTimeout(() => {

                setDenemeColor('white');
                setDenemeColor2("white");
                document.body.style.background = "#2D2D2D";

            }, 3000);
        }
        else if (result === 'result3') {
            setDenemeColor('green');
            setDenemeColor3('black');
            document.body.style = 'background: red;';
            setTimeout(() => {

                setDenemeColor('white');
                setDenemeColor3("white");
                document.body.style.background = "#2D2D2D";

            }, 3000);
        }
    }


    const trueResult = () => {


    }



    const Tiklandi = (tiklananDeger, result) => {

        if (tiklananDeger == (newQuestion?.firstNumber * newQuestion?.secondNumber)) {

            if (result === 'result1') {
                setDenemeColor("black");
                document.body.style = 'background: green;';
                setTimeout(() => {

                    setDenemeColor("white");
                    document.body.style.background = "#2D2D2D";
                    setStep((prevStep) => prevStep + 1);

                }, 3000);
            }
            else if (result === 'result2') {
                setDenemeColor2("black");
                document.body.style = 'background: green;';
                setTimeout(() => {

                    setDenemeColor2("white");
                    document.body.style.background = "#2D2D2D";
                    setStep((prevStep) => prevStep + 1);

                }, 3000);
            }
            else if (result === 'result3') {
                setDenemeColor3("black");
                document.body.style = 'background: green;';
                setTimeout(() => {
                    setDenemeColor3("white");
                    document.body.style.background = "#2D2D2D";
                    setStep((prevStep) => prevStep + 1);
                }, 3000);
            }
        }
        else {
            if (result === 'result1') {
                if (newQuestion?.result2 == (newQuestion?.firstNumber * newQuestion?.secondNumber)) {
                    setDenemeColor2("green");
                    setDenemeColor('black');
                    document.body.style = 'background: red;';

                    setTimeout(() => {

                        setDenemeColor("white");
                        setDenemeColor2("white");

                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);


                    }, 3000);
                }
                else {
                    setDenemeColor3("green");
                    setDenemeColor('black');
                    document.body.style = 'background: red;';

                    setTimeout(() => {
                        setDenemeColor("white");
                        setDenemeColor3("white");
                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);
                    }, 3000);
                }
            }
            else if (result === 'result2') {
                if (newQuestion?.result1 == (newQuestion?.firstNumber * newQuestion?.secondNumber)) {
                    setDenemeColor("green");
                    setDenemeColor2('black');
                    document.body.style = 'background: red;';

                    setTimeout(() => {
                        setDenemeColor("white");
                        setDenemeColor2("white");

                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);

                    }, 3000);
                }
                else {
                    setDenemeColor3("green");
                    setDenemeColor2('black');

                    document.body.style = 'background: red;';

                    setTimeout(() => {
                        setDenemeColor2("white");
                        setDenemeColor3("white");
                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);

                    }, 3000);
                }
            }
            else {
                if (newQuestion?.result2 == (newQuestion?.firstNumber * newQuestion?.secondNumber)) {
                    setDenemeColor2("green");
                    setDenemeColor3('black');
                    document.body.style = 'background: red;';

                    setTimeout(() => {

                        setDenemeColor3("white");
                        setDenemeColor2("white");

                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);

                    }, 3000);
                }
                else {
                    setDenemeColor("green");
                    setDenemeColor3('black');

                    document.body.style = 'background: red;';

                    setTimeout(() => {
                        setDenemeColor("white");
                        setDenemeColor3("white");
                        document.body.style.background = "#2D2D2D";
                        setStep((prevStep) => prevStep + 1);

                    }, 3000);
                }
            }
        }
    }

    return (
        question === 10 ?
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
                            <div className='challenge-page-text'>Questions: {correctAnswers}/{question}</div>

                        </div>

                        <div className='icon1'>
                            <ChallengePageCircleIcon color={denemeColor} />
                            <button className='result1' onClick={() => Tiklandi(newQuestion?.result1, 'result1')}>
                                {newQuestion?.result1}
                            </button>
                        </div>

                        <div className='icon2'>
                            <ChallengePageCircleIcon color={denemeColor2} />
                            <button className='result2' onClick={() => Tiklandi(newQuestion?.result2, 'result2')}>
                                {newQuestion?.result2}
                            </button>
                        </div>

                        <div className='icon3'>
                            <ChallengePageCircleIcon color={denemeColor3} />
                            <button className='result3' onClick={() => Tiklandi(newQuestion?.result3, 'result3')}>
                                {newQuestion?.result3}
                            </button>
                        </div>

                    </div>
                </div>
            </>
    )
}

export default ChallengePage