import React from 'react';
import { useContext } from 'react';
import { quizContext } from './Contexts';
import { QuestionsData } from './QuestionsData';

const CheckAns = () => {
  const { optionChosen,setGameset,setCurrQues,setScore,setOptionChosen,score } = useContext(quizContext);
  const RestartQuiz=()=>{
    setCurrQues(0)
    setScore(0)
    setOptionChosen([])
    setGameset('quiz')
  }
  return (
    <div>
      {QuestionsData.map((ques, index) => {
        const isAnswerCorrect = optionChosen[index] === ques.answer;
        return (
          <div
            key={ques.id}
            style={{
              border: '2px solid black',
              margin: '20px',
              padding: '10px',
              backgroundColor: 'lightGreen',
            }}
          >
            <h1 style={{ color: 'white' }}>
              {ques.id}. {ques.question}
            </h1>
            <h1>Your answer: {optionChosen[index]}</h1>
            {isAnswerCorrect ? (
              <h1 style={{ color: 'green' }}>Your answer is correct</h1>
            ) : (
              <>
                <h1 style={{ color: 'red' }}>Your answer is wrong</h1>
                <h1 style={{ color: 'green' }}>Correct answer is: {ques.answer}</h1>
              </>
            )}
          </div>
        );
      })}
      <div
      style={{
        border: '2px solid black',
        margin: '20px',
        padding: '10px',
        backgroundColor: 'silver',
      }}
    >
      <h1>Your final Score is: {score}</h1>
    </div>
      <button className="btn btn-danger" style={{margin:'10px'}} onClick={RestartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default CheckAns;