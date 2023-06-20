import './App.css';
import {  useState } from 'react';
import Start from './components/Start';
import EndPage from './components/EndPage';
import Quiz from './components/Quiz';
import { quizContext } from './components/Contexts';
function App() {
  const[gameset,setGameset]=useState('menu')
  const[score,setScore]=useState(0)
  return (
    <div className="App">
    <quizContext.Provider value={{gameset,setGameset,score,setScore}}>
    {gameset==='menu' && <Start/>}
    {gameset==='quiz' && <Quiz/>}
    {gameset==='end' && <EndPage/>}
    </quizContext.Provider>
    </div>
  );
}
export default App;
