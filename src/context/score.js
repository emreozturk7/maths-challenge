import React, { useContext, useState, useEffect } from "react";

const ScoreContext = React.createContext();

const ScoreProvider = ({ children }) => {

    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [tour, setTour] = useState(1);

    const [step, setStep] = useState(0);
    const [newQuestion, setNewQuestion] = useState();

    useEffect(() => {
        const question = generateQuestion();
        setNewQuestion(question);
    }, [step]);


    const generateQuestion = () => {
        const first = Math.floor(Math.random() * 10) + 1;
        const second = Math.floor(Math.random() * 10) + 1;
        const randomLocation = Math.floor(Math.random() * 3) + 1;

        let result1 = [first * second];
        let result2 = first * (second - 1);
        let result3 = first * (second + 1);

        if (randomLocation === 1) {
            result2 = [first * second];
            result3 = first * (second - 1);
            result1 = first * (second + 1);
        }
        else if (randomLocation === 2) {
            result3 = [first * second];
            result1 = first * (second - 1);
            result2 = first * (second + 1);
        }

        return { firstNumber: first, secondNumber: second, result1: result1, result2: result2, result3: result3, randomLocation: randomLocation };
    }
    const generateRandomResults = () => {



    }
    const addScore = (data) => {
        setScore(data);
    }

    const addTotalQuestion = (data) => {
        setQuestion(data);
    }

    const addCorrectAnswers = (data) => {
        setCorrectAnswers(correctAnswers + data);
    }

    const addTour = () => {
        setTour(tour + 1);
    }

    return (
        <ScoreContext.Provider
            value={{
                score,
                question,
                correctAnswers,
                tour,
                addScore,
                addTotalQuestion,
                addCorrectAnswers,
                addTour,
                step,
                setStep,
                newQuestion,
            }}
        >
            {children}
        </ScoreContext.Provider>
    )
}

function useScore() {
    return useContext(ScoreContext);
}

export { ScoreProvider, ScoreContext, useScore }