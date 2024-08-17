import React from 'react'
import {decode} from 'html-entities'
import {nanoid} from 'nanoid'

function Question(props) {

    // Create state for the player's answer
    const [playerAnswer, setPlayerAnswer] = React.useState(null);

    // Create state for the shuffled answers array
    const [shuffledAllAnswers, setShuffledAllAnswers] = React.useState([]);

    // Add the incorrect and correct answers for the question to a new answers array
    const allAnswers = [...props.incorrectAnswers, props.correctAnswer];

    // Shuffle the answers array when the component mounts or when props change
    React.useEffect(() => {
        setShuffledAllAnswers(shuffle(allAnswers));
    }, [allAnswers]);

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
        return (
            <div key={id} className="button-group">
                <input type="radio" id={id} name={`answer-${props.id}`} value={answer} />
                <label htmlFor={id}>{decode(answer)}</label>
            </div>
        );
    });

    // If the player is checking their answers, save the player's selected answer
    React.useEffect(() => {
        if (props.showAnswers) {
            const selectedInput = document.querySelector(`input[name="answer-${props.id}"]:checked`);
            const answer = selectedInput ? selectedInput.value : null;
            console.log(answer);
            setPlayerAnswer(answer);
    }, [props.showAnswers]);

    // Create an array of checked answer elements (to reflect the player's answers as correct or incorrect)
    const checkedAllAnswerElements = shuffledAllAnswers.map(answer => {
        const id = nanoid();

        // If the player's answer is correct, render the correct answer as checked 'correct'
        if (playerAnswer === answer && answer === props.correctAnswer) {
            return (
                <div key={id} className="button-correct">
                    <input type="radio" id={id} name={`answer-${props.id}`} value={answer} disabled checked />
                    <label htmlFor={id}>{decode(answer)}</label>
                </div>
            );
        
        // If the player's answer is incorrect, render the incorrect answer as checked 'incorrect'
        } else if (playerAnswer === answer && props.incorrectAnswers.includes(answer)) {
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

    // Render the Question component
    return (
        <div className="question-container">
            <h2 className="question">{decode(props.question)}</h2>
            <div className="answers">
                
                {/* Render the answers (unchecked) */}
                {!props.showAnswers && allAnswerElements}

                {/* Render the checked answers if the player is checking their answers */}
                {props.showAnswers && checkedAllAnswerElements}
            </div>
            <div className="line"></div>
        </div>
    );
}

export default Question;

