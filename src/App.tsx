import { useState } from 'react'

import './App.css'
import './components/FejResz'
import { FejResz } from './components/FejResz'
import { OldalTartalom } from './components/OldalTartalom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {FejResz()}
      {OldalTartalom()}
    </>
  )
}

export default App
