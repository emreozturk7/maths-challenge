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

                <div className='challenge-page-score-container'>

                    <div className='deneme'>

                        <div className='challenge-page-text'>Score: 129</div>
                        <div className='challenge-page-text'>Tour: 2</div>
                        <div className='challenge-page-text'>Questions: 6/7</div>

                    </div>

                    <div className='deneme2'>

                        <div>
                            <ChallengePageCircleIcon />

                        </div>
                        <div>
                            <ChallengePageCircleIcon />

                        </div>
                        <div>
                            <ChallengePageCircleIcon />

                        </div>


                    </div>

                </div>


            </div>
        </>
    )
}

export default ChallengePage