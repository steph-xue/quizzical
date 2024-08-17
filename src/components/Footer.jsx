import React from 'react'

function Footer(props) {

    // Render the Footer component (scoreboard and buttons)
    return (
        <div className="footer">

            {/* Render the check answers button if the game is still ongoing */}
            {
                !props.showAnswers &&
                <button className="btn btn-black btn-submit" onClick={props.checkAnswers}>Check answers</button>
            }

            {/* Renders the score and play again button if player is checking their answers after the game */}
            {
                props.showAnswers &&
                <div className="footer-container">
                    <p>Score: {props.score} / {props.questions.length()}</p>
                    <button className="btn btn-black btn-submit" onClick={props.playAgain}>Play Again</button>
                </div>
            }
            
        </div>
    );
}

export default Footer;
