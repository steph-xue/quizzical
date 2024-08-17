import React from 'react'
import Cover from './components/Cover.jsx'
import Question from './components/Question.jsx'

function App() {

  const [start, setStart] = React.useState(false);
  const [showAnswers, setShowAnswers] = React.useState(false);

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
          <Question />
          <Question />
          <Question />
          <button className="btn btn-black btn-check">Check answers</button>
        </div>
      }
    </main>
  );
}

export default App
