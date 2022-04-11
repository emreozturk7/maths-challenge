import React from 'react';
import { Link } from "react-router-dom";
import BarIcon from '../constants/icons/barIcon';
import FirstPageCircleIcon from '../constants/icons/firstPageCircleIcon';
import { useScore } from '../context/score';

function FirstPage() {

    return (
        <>
            <div className='first-page-container'>

                <div className='first-page-title'>Mathematics Game</div>
                <BarIcon />

                <div className='first-page-score-container'>
                    <div className='first-page-text'>Total Score: {localStorage.getItem('AggregateScore')}</div>
                    <div className='first-page-text'>Total Questions: {localStorage.getItem('AggregateQuestion')}</div>
                    <div className='first-page-text'>Correct Answers: {localStorage.getItem('AggregateCorrectAnswers')}</div>
                </div>

                <FirstPageCircleIcon />

                <Link to="/challenge_page">
                    <span className='start-button'>Start</span>
                </Link>
            </div>
        </>
    );
}

export default FirstPage