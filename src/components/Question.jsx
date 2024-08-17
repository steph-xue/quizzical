import React from 'react'
import {decode} from 'html-entities';

function Question(props) {

    const allAnswers = [...props.incorrectAnswers, props.correctAnswer]
    console.log(props.incorrectAnswers)

    const allAnswerElements = allAnswers.map(answer => (
        <div class="button-group">
            <input type="radio" id="{answer}" name="answer" />
            <label for="{answer}">{decode(answer)}</label>
        </div>
    ));

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

