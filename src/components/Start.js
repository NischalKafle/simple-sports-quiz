import React from 'react';
import { useContext } from 'react';
import { quizContext } from './Contexts';
const Start = () => {
    const{gameSet,setGameset}=useContext(quizContext)
  return (
    <div style={{ backgroundColor: 'purple', minHeight: '100vh', display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: 'white' }}>
        Welcome to Sports Quiz App!
      </h1>
      <button onClick={()=>{setGameset('quiz')}} class="btn btn-primary" style={{color:'white',marginTop:'20px'}}>Start Quiz</button>
    </div>
  );
};

export default Start;
