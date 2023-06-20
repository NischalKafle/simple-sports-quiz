import './App.css';
import {  useState } from 'react';
import Start from './components/Start';
import EndPage from './components/EndPage';
import Quiz from './components/Quiz';
import CheckAns from './components/CheckAns';
import { quizContext } from './components/Contexts';
function App() {
  const[gameset,setGameset]=useState('menu')
  const[score,setScore]=useState(0)
  const[currQues,setCurrQues]=useState(0)
  const[optionChosen,setOptionChosen]=useState('')
  return (
    <div className="App">
    <quizContext.Provider value={{gameset,setGameset,score,setScore,currQues,setCurrQues,optionChosen,setOptionChosen}}>
    {gameset==='menu' && <Start/>}
    {gameset==='quiz' && <Quiz/>}
    {gameset==='end' && <EndPage/>}
    {gameset==='check' && <CheckAns/> }
    </quizContext.Provider>
    </div>
  );
}
export default App;
