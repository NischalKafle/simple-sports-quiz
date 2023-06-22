import React from 'react';
import { useContext } from 'react';
import { quizContext } from './Contexts';
import { QuestionsData } from './QuestionsData';

const Quiz = () => {
  const { score, setScore, setGameset, setCurrQues, optionChosen, setOptionChosen } = useContext(quizContext);
  const currQues = useContext(quizContext).currQues;

  const nextQues = () => {
    if (!optionChosen[currQues]) {
      alert('Please choose an option');
      return;
    }
    
    if (QuestionsData[currQues].answer === optionChosen[currQues]){
      setScore(score + 1);
    }
    
    setCurrQues(currQues + 1);
  };

  const prevQues = () => {
    setCurrQues(currQues - 1);
  };

  const quesEnd = () => {
    if (!optionChosen[currQues]) {
      alert('Please choose an option');
      return;
    }
    
    if (QuestionsData[currQues].answer === optionChosen[currQues]){
      setScore(score + 1);
    }
    
    setGameset('end');
  };

  const handleOptionSelect = (option) => {
    const updatedOptions = [...optionChosen];
    updatedOptions[currQues] = option;
    setOptionChosen(updatedOptions);
  };

  return (
    <div style={{ backgroundColor: 'gold', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h1 style={{ color: 'black', fontWeight: 'bold' }}>{QuestionsData[currQues].question}</h1>
        <div style={{ display: 'flex', color: 'white', fontWeight: 'bold', flexDirection: 'column', margin: 'auto', alignItems: 'center' }}>
          <button className="btn btn-success" style={{ margin: '5px' }} onClick={() => handleOptionSelect('optionA')}>
            {QuestionsData[currQues].optionA}
          </button>
          <button className="btn btn-success" style={{ margin: '5px' }} onClick={() => handleOptionSelect('optionB')}>
            {QuestionsData[currQues].optionB}
          </button>
          <button className="btn btn-success" style={{ margin: '5px' }} onClick={() => handleOptionSelect('optionC')}>
            {QuestionsData[currQues].optionC}
          </button>
          <button className="btn btn-success" style={{ margin: '5px' }} onClick={() => handleOptionSelect('optionD')}>
            {QuestionsData[currQues].optionD}
          </button>
        </div>
        {currQues === QuestionsData.length - 1 ? (
          <>
            <button style={{ margin: '20px' }} className="btn btn-primary" onClick={quesEnd}>Finish Quiz</button>
            <button style={{ margin: '20px' }} className="btn btn-danger" onClick={prevQues}>Go Back</button>
          </>
        ) : (
          <div>
            <button style={{ margin: '20px' }} className="btn btn-primary" onClick={nextQues}>Next Question</button>
            {currQues === 0 ? null : <button style={{ margin: '20px' }} className="btn btn-danger" onClick={prevQues}>Go Back</button>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
