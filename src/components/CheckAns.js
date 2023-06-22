import React from 'react';
import { useContext } from 'react';
import { quizContext } from './Contexts';
import { QuestionsData } from './QuestionsData';

const CheckAns = () => {
  const { optionChosen } = useContext(quizContext);

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
    </div>
  );
};

export default CheckAns;
