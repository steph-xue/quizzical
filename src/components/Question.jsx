import React from 'react'
import {decode} from 'html-entities'
import {nanoid} from 'nanoid'

function Question(props) {

    // Add the incorrect and correct answers for the question to a new answers array
    const allAnswers = [...props.incorrectAnswers, props.correctAnswer];

    // Shuffle the answers array
    const shuffledAllAnswers = shuffle(allAnswers);

    // Map over and create a radio button for each answer 
    const allAnswerElements = shuffledAllAnswers.map(answer => {
        const id = nanoid();
        return (
            <div key={id} className="button-group">
                <input type="radio" id={id} name={`answer-${props.id}`} />
                <label htmlFor={id}>{decode(answer)}</label>
            </div>
        );
    });

    // Function to shuffle the answers array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Render the Question component
    return (
        <div className="question-container">
            <h2 className="question">{decode(props.question)}</h2>
            <div className="answers">
                {allAnswerElements}
            </div>
            <div className="line"></div>
        </div>
    );
}

export default Question;

