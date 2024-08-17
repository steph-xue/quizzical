import React from 'react'
import {nanoid} from 'nanoid'
import Cover from './components/Cover.jsx'
import Question from './components/Question.jsx'

function App() {
  // Create state for if the quiz has been started
  const [start, setStart] = React.useState(false);

  // Create state for if the answers should be shown
  const [showAnswers, setShowAnswers] = React.useState(false);

  // Create state for the array of questions retrieved from the API
  const [questions, setQuestions] = React.useState([]);

  // Fetch random questions from the API when the quiz is started
  React.useEffect(() => {
    if (start) {
      fetch('https://opentdb.com/api.php?amount=5&difficulty=medium')
        .then(response => response.json())
        .then(data => {
          setQuestions(data.results);
        });
    }
  }, [start]);

  // Function to set page to stop the game and show answers
  function checkAnswers() {
    setShowAnswers(true);
    setStart(false);
  }

  // Map over and create a Question component for each question
  let questionElements = null;
  if (questions != undefined) {
    questionElements = questions.map((question, index) => {

      const id = nanoid();

      return (
        <Question
          key={id}
          id={index}
          question={question.question}
          correctAnswer={question.correct_answer}
          incorrectAnswers={question.incorrect_answers}
          showAnswers={showAnswers}
        />
      );
    });
  }

  // Render the App component
  return (
    <main>

      {/* Render the Cover component if the quiz has not been started */}
      {
        (!start && !showAnswers) &&
        <Cover
            setStart={setStart} 
        />
      }
  
      {/* Render the questions if the quiz has been started */}
      {
        ((start && !showAnswers) || (!start && showAnswers)) &&
        <div className="questions-page">
          {questionElements}
          <div className="footer">
            <button className="btn btn-black btn-submit" onClick={checkAnswers}>Check answers</button>
          </div>
        </div>
      }
      </main>
  );
}

export default App;
