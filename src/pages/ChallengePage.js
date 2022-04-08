import React from 'react';
import { Link } from "react-router-dom";
import PersonIcon from '../constants/icons/personIcon';
import ChallengePageCircleIcon from '../constants/icons/challengePageCircleIcon';

function ChallengePage() {
    return (
        <>
            <div className='challenge-page-container'>

                <div className='person-icon'>
                    <PersonIcon />
                </div>
                <div className='challenge-page-question'>7 x 8</div>

                <div className='challenge-page-score-container'>

                    <div className='challenge-page-score-table'>

                        <div className='challenge-page-text'>Score: 129</div>
                        <div className='challenge-page-text'>Tour: 2</div>
                        <div className='challenge-page-text'>Questions: 6/7</div>

                    </div>

                    <div className='icon1'>
                        <ChallengePageCircleIcon />
                        <div className='result1'>49</div>


                    </div>
                    <div className='icon2'>
                        <ChallengePageCircleIcon />
                        <div className='result2'>64</div>

                    </div>
                    <div className='icon3'>
                        <ChallengePageCircleIcon />
                        <div className='result3'>56</div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default ChallengePage