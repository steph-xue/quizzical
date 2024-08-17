import React from 'react'
import {decode} from 'html-entities'
import {nanoid} from 'nanoid'

function Question(props) {

    const allAnswers = [...props.incorrectAnswers, props.correctAnswer]
    console.log(props.incorrectAnswers)

    const allAnswerElements = allAnswers.map((answer) => {
        const id = nanoid();
        return (
            <div key={id} className="button-group">
                <input type="radio" id="{id}" name="answer" />
                <label htmlFor="{id}">{decode(answer)}</label>
            </div>
        );
    });

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

