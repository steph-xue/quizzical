import React from 'react'
import {decode} from 'html-entities';

function Question(props) {

    const allAnswers = [...props.incorrectAnswers, props.correctAnswer]
    console.log(props.incorrectAnswers)

    const allAnswerElements = allAnswers.map(answer => (
        <input type="radio" name="answer" value={answer} />
    ));

    return (
        <div className="question-container">
            <h2 className="question">{decode(props.question)}</h2>
            {allAnswerElements}
            <div className="line"></div>
        </div>
    );
}

export default Question;

