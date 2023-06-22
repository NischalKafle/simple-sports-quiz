import React from 'react'
import { useContext } from 'react'
import { quizContext } from './Contexts'
import { QuestionsData } from './QuestionsData'
const CheckAns = () => {
    const{optionChosen,score,setScore,setGameset,setCurrQues}=useContext(quizContext)
    const restartQuiz=()=>{
        setCurrQues(0)
        setGameset('quiz')
        setScore(0)
      }
  return (
    <div >
    {
        QuestionsData.map((ans)=>{
            return(
                <div style={{border:'2px solid black',margin:'20px',padding:'10px',backgroundColor:'lightGreen'}}>
                <h1 style={{color:'white'}}>
                {ans.id}. {ans.question}
                </h1>
                {
                    optionChosen==ans.answer?(
                        <>
                        <h1>Your answer:{optionChosen}</h1>
                        <h1 style={{color:'green'}}>Your answer is correct</h1>
                        </>
                    ):(
                        <>
                        <h1>Your answer:{optionChosen}</h1>
                        <h1 style={{color:'red'}}>Your answer is wrong</h1>
                        <h1 style={{color:'green'}}>Correct answer is: {ans.answer} </h1>
                        </>
                    )
                }
                </div>
                
            )
        })
    }
    <div style={{border:'2px solid black',margin:'20px',padding:'10px',backgroundColor:'gold'}}>
    <h1>Your final score is: {score}/{QuestionsData.length}</h1>
    </div>
    <button class="btn btn-danger" style={{margin:'10px'}} onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}
