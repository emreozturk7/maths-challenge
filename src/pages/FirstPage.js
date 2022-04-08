import React from 'react'
import { Link } from "react-router-dom";
import BarIcon from '../constants/icons/barIcon';
import FirstPageCircleIcon from '../constants/icons/firstPageCircleIcon';


function FirstPage() {
    return (
        <>
            <div className='first-page-container'>

                <div className='first-page-title'>Mathematics Game</div>
                <BarIcon />

                <div className='first-page-score-container'>
                    <div className='first-page-text'>Total Point: 129</div>
                    <div className='first-page-text'>Total Questions: 40</div>
                    <div className='first-page-text'>Correct Answers: 32</div>
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