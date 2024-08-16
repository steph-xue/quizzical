import React from 'react'
import Cover from './components/Cover.jsx'

function App() {

  const [start, setStart] = React.useState(false);
  const [showAnswers, setShowAnswers] = React.useState(false);

  return (
    <main>
      {
        (!start && !showAnswers) &&
        <Cover />
      }

      {
        ((start && !showAnswers) || (!start && showAnswers)) &&
        <div>
          <h2>Question 1</h2>
          <p>What is the capital of France?</p>
          <p>Answers</p>
          <div className="line"></div>
          <button onClick={() => setShowAnswers(true)}>Check answers</button>
        </div>
      }
    </main>
  );
}

export default App
