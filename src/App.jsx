import React from 'react'
import Cover from './components/Cover.jsx'
import Question from './components/Question.jsx'

function App() {

  const [start, setStart] = React.useState(false);
  const [showAnswers, setShowAnswers] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    if (start) {
      fetch('https://opentdb.com/api.php?amount=5&difficulty=medium')
        .then(response => response.json())
        .then(data => {
          setQuestions(data.results);
        });
    }
  }, [start]);

  const questionElements = questions.map((question, index) => (
    <Question
      key={index}
      question={question.question}
      correctAnswer={question.correct_answer}
      incorrectAnswers={question.incorrect_answers}
      showAnswers={showAnswers}
    />
  ));


  return (
    <main>
      {
        (!start && !showAnswers) &&
        <Cover
            setStart={setStart} 
        />
      }

      {
        ((start && !showAnswers) || (!start && showAnswers)) &&
        <div className="questions-page">
          {questionElements}
          <button className="btn btn-black btn-check">Check answers</button>
        </div>
      }
    </main>
  );
}

export default App
