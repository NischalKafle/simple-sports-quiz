import React from 'react'
import { useState,useContext } from 'react'
import { quizContext } from './Contexts'
import { QuestionsData } from './QuestionsData'
const Quiz = () => {
    const{score,setScore}=useContext(quizContext)
    const[currQues,setCurrQues]=useState(0)
    const[optionChosen,setOptionChosen]=useState('')
    const{gameSet,setGameset}=useContext(quizContext)

    const nextQues=()=>{
            if (optionChosen === '') {
    alert('Please choose an option');
    return;
  }
        if (QuestionsData[currQues].answer === optionChosen){
            setScore(score+1)
        }
        setCurrQues(currQues+1)
    }
    const quesEnd=()=>{
            if (optionChosen === '') {
    alert('Please choose an option');
    return;
  }
      if (QuestionsData[currQues].answer === optionChosen){
        setScore(score+1)
    }
    setGameset('end')
    }
  return (
    <div style={{backgroundColor:'gold',minHeight:'100vh',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div>
            <h1 style={{color:'black',fontWeight:'bold',}}>{QuestionsData[currQues].question}</h1>
            <div style={{ display: 'flex',color:'white',fontWeight:'bold', flexDirection: 'column', margin:'auto', alignItems: 'center' }}>
            <button class="btn btn-success" style={{ margin: '5px' }} onClick={() => setOptionChosen('optionA')}>
              {QuestionsData[currQues].optionA}
            </button>
            <button class="btn btn-success" style={{ margin: '5px' }} onClick={() => setOptionChosen('optionB')}>
              {QuestionsData[currQues].optionB}
            </button>
            <button class="btn btn-success" style={{ margin: '5px' }} onClick={() => setOptionChosen('optionC')}>
              {QuestionsData[currQues].optionC}
            </button>
            <button class="btn btn-success" style={{ margin: '5px' }} onClick={() => setOptionChosen('optionD')}>
              {QuestionsData[currQues].optionD}
            </button>
          </div> 
            {currQues ==QuestionsData.length-1 ? <button style={{margin:'20px'}} class="btn btn-primary" onClick={quesEnd}>Finish Quiz</button>:
          <button style={{margin:'20px'}} class="btn btn-primary" onClick={nextQues}>Next Question</button>
          }
    </div>
    </div>
  )
}
export default Quiz