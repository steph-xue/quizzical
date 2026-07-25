import PropTypes from 'prop-types'

function Footer(props) {

    // Render the Footer component (scoreboard and buttons)
    return (
        <div className="footer">

            {/* Render the check answers button if the game is still ongoing */}
            {
                !props.showAnswers &&
                <div className="footer-container1"> 
                    <button className="btn btn-black btn-check-answers" onClick={props.checkAnswers}>Check answers</button>
                </div>
            }

            {/* Renders the score and play again button if player is checking their answers after the game */}
            {
                props.showAnswers &&
                <div className="footer-container2">
                    <p className="score">You scored {props.score} / {props.questions.length} correct answers</p>
                    <button className="btn btn-black btn-play-again" onClick={props.playAgain}>Play Again</button>
                </div>
            }
            
        </div>
    );
}

Footer.propTypes = {
    showAnswers: PropTypes.bool.isRequired,
    checkAnswers: PropTypes.func.isRequired,
    playAgain: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired
};

export default Footer;
