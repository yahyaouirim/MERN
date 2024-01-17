import { useState } from 'react'
import './App.css'
import DisplayColor from './components/DisplayColor'
import Form from './components/Form'

function App() {
  const [arrayColorSize, setArrayColorSize]=useState([]);

  return (
    <>
      <Form arrayColorSize={arrayColorSize} setArrayColorSize={setArrayColorSize} />
      <DisplayColor arrayColorSize={arrayColorSize}/>
    </>
  )
}

export default App
