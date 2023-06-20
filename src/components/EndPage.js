import React from 'react'
import { useContext } from 'react'
import { quizContext } from './Contexts'
const EndPage = () => {
  const{score,setScore,setGameset}=useContext(quizContext)
  const restartQuiz=()=>{
    setGameset('menu')
    setScore(0)
  }
  return (
    <div style={{ backgroundColor: 'purple', minHeight: '100vh', display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1 style={{ color: 'white' }}>
      Your Final Score is:{score}
    </h1>
    <button class="btn btn-danger" onClick={restartQuiz}>Restart Quiz</button>
  </div>
  )
}

export default EndPage