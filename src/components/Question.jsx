import React from 'react'
import {decode} from 'html-entities'
import {nanoid} from 'nanoid'

function Question(props) {

    // Create state for the shuffled answers array
    const [shuffledAllAnswers, setShuffledAllAnswers] = React.useState([]);

    // Add the incorrect and correct answers for the question to a new answers array
    const allAnswers = [...props.incorrectAnswers, props.correctAnswer];

    // Shuffle the answers array when the component first mounts 
    React.useEffect(() => {
        setShuffledAllAnswers(shuffle(allAnswers));
    }, []);

    // Function to shuffle the answers array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Create an array of answer elements to render
    const allAnswerElements = shuffledAllAnswers.map(answer => {
        const id = nanoid();

        // If the player's answer is selected, render the selected answer as grey
        let selectedClass = "";
        if (props.playerAnswer === answer) {
            selectedClass = "grey-button"
        }
        return (
            <div key={id} className="button-group">
                <input type="radio" id={id} name={`answer-${props.id}`} value={answer} onClick={() => props.handleAnswerSelect(props.id, answer)} />
                <label className={`${selectedClass}`}htmlFor={id}>{decode(answer)}</label>
            </div>
        );
    });

    // Create an array of checked answer elements (to reflect the player's answers as correct or incorrect)
    const checkedAllAnswerElements = shuffledAllAnswers.map(answer => {
        const id = nanoid();

        // If the player's answer is correct, render the correct answer as checked 'correct'
        if (props.playerAnswer === answer && answer === props.correctAnswer) {
            return (
                <div key={id} className="button-correct">
                    <input type="radio" id={id} name={`answer-${props.id}`} value={answer} disabled checked />
                    <label htmlFor={id}>{decode(answer)}</label>
                </div>
            );
        
        // If the player's answer is incorrect, render the other correct answer as 'correct'
        } else if (props.playerAnswer !== answer && answer === props.correctAnswer) {
            return (
                <div key={id} className="button-correct">
                    <input type="radio" id={id} name={`answer-${props.id}`} value={answer} disabled checked />
                    <label htmlFor={id}>{decode(answer)}</label>
                </div>
            );
        // If the player's answer is incorrect, render the incorrect answer as checked 'incorrect'
        } else if (props.playerAnswer === answer && props.incorrectAnswers.includes(answer)) {
            return (
                <div key={id} className="button-incorrect">
                    <input type="radio" id={id} name={`answer-${props.id}`} value={answer} disabled checked />
                    <label htmlFor={id}>{decode(answer)}</label>
                </div>
            );

        // Render the other unselected answers as faded out
        } else {
            return (
                <div key={id} className="button-faded">
                    <input type="radio" id={id} name={`answer-${props.id}`} value={answer} disabled />
                    <label htmlFor={id}>{decode(answer)}</label>
                </div>
            );
        }
    });

    const result = props.playerAnswer === props.correctAnswer ? <p className="correct">Correct!</p> : <p className="incorrect">Incorrect!</p>

    // Render the Question component
    return (
        <div className="question-container">
            <div className="spacing"></div>

            {/* Render the question */}
            <h2 className="question">{decode(props.question)}</h2>


            {/* Render the answers */}
            <div className="answers">

                {/* If playing quiz, show unchecked answers */}
                {
                    !props.showAnswers && 
                    <div className="unchecked-answers">
                        {allAnswerElements}
                    </div>
                }


                {/* If the player is done the quiz, show checked answers */}
                {
                    props.showAnswers && 
                    <div className="checked-answers">
                        <div className="options">
                            {checkedAllAnswerElements}
                        </div>
                        <div className="result">
                            {result}
                        </div>
                    </div>
                }
            </div>
            <div className="line"></div>
        </div>
    );
}

export default Question;

