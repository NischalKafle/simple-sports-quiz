import React from 'react'
import { useContext } from 'react'
import { quizContext } from './Contexts'
const EndPage = () => {
  const{score,setScore,setGameset,setCurrQues}=useContext(quizContext)
  const restartQuiz=()=>{
    setCurrQues(0)
    setGameset('quiz')
    setScore(0)
  }
  const checkAns=()=>{
        setGameset('check')
  }
  return (
    <div style={{ backgroundColor: 'purple', minHeight: '100vh', display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1 style={{ color: 'white' }}>
      Your Final Score is:{score}
    </h1>
    <div style={{margin:'10px'}}>
    <button class="btn btn-danger" onClick={restartQuiz}>Restart Quiz</button>
    <button style={{marginLeft:'5px'}} class="btn btn-primary" onClick={checkAns}>Check Answer</button>
    </div>
  </div>
  )
}

export default EndPage