import React , {useState} from 'react'

function App() {

  const [answer , setAnswer] = useState(0)
  const [answerTwo , setAnswerTwo] = useState(0)

  const increment = () => {
    setAnswer(answer + 1)
  }
  
  const decrement = () => {
    setAnswerTwo(answerTwo - 1)
  }
  
  return (
    <>
     {answer ? "The digits are increasing" : "The digits are decreasing" }

      <h3 id = "header">Counter</h3>
      <button id = "counter-increment" onClick ={increment} >+</button>
      <button id = "counter-decrement"  onClick ={decrement} >-</button>
      <h3 id = "answers">{answer}</h3>
      <h3 id = "answersTwo">{answerTwo}</h3>
    

    </>
  );
}

export default App;
