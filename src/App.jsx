import React from 'react'
import {nanoid} from 'nanoid'
import Cover from './components/Cover.jsx'
import Question from './components/Question.jsx'
import Footer from './components/Footer.jsx'

function App() {
  // Create state for if the quiz has been started
  const [start, setStart] = React.useState(false);

  // Create state for if the answers should be shown
  const [showAnswers, setShowAnswers] = React.useState(false);

  // Create state for the array of questions retrieved from the API
  const [questions, setQuestions] = React.useState([]);

  // Create state for the score (number of correct answers)
  const [score, setScore] = React.useState(0);

  // Fetch random questions from the API when the quiz is started
  React.useEffect(() => {
    if (start) {
      fetch('https://opentdb.com/api.php?amount=5&difficulty=medium')
        .then(response => response.json())
        .then(data => {
          setQuestions(data.results.map(question => {
            return {
                ...question,
                id: nanoid(),
                playerAnswer: ""
            };
        }));
      })
    }
  },[start])

  // Function to save the player's selected answer
  function handleAnswerSelect(questionId, answer) {
    if (!showAnswers) {
      setQuestions(questions.map(question => (
          question.id === questionId
            ? {...question, playerAnswer: answer }
            : question
      )));
    }
  }

  // Function to set page to stop the game and show answers
  function checkAnswers() {
    setShowAnswers(true);
    setStart(false);
    calculateScore();
  }

  function calculateScore() {
    let correctAnswers = 0;
    questions.forEach(question => {
      if (question.playerAnswer === question.correct_answer) {
          correctAnswers++;
      }
    })
    setScore(correctAnswers); 
  }

  // Function to restart the game
  function playAgain() {
    setShowAnswers(false);
    setStart(true); 
    setScore(0);
    setQuestions([]);
  }

  // Map over and create a Question component for each question
  let questionElements = [];
  if (questions != undefined) {
    questionElements = questions.map(question => {
      return (
        <Question
          key={question.id}
          id={question.id}
          question={question.question}
          correctAnswer={question.correct_answer}
          incorrectAnswers={question.incorrect_answers}
          playerAnswer={question.playerAnswer}
          showAnswers={showAnswers}
          handleAnswerSelect={handleAnswerSelect}
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
        <Cover setStart={setStart} />
      }
  
      {/* Render the questions if the quiz has been started */}
      {
        ((start && !showAnswers) || (!start && showAnswers)) &&
        <div className="questions-page">
            {questionElements}
            <Footer 
                showAnswers={showAnswers}
                checkAnswers={checkAnswers}
                playAgain={playAgain}
                score={score}
                questions={questions}
            />
        </div>
      }

    </main>
  );
}

export default App;
