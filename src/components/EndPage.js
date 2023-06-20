import React from 'react'
import { useContext } from 'react'
import { quizContext } from './Contexts'
const EndPage = () => {
  const{score}=useContext(quizContext)

  return (
    <div style={{ backgroundColor: 'purple', minHeight: '100vh', display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1 style={{ color: 'white' }}>
      Your Final Score is:{score}
    </h1>
  </div>
  )
}

export default EndPage