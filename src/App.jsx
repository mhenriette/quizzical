import { useState } from 'react'
import './App.css'
import Quiz from './components/sections/Quiz'
import Start from './components/sections/Start'
function App() {
  const [start, setStart] = useState(false)

  function getStarted() {
    setStart(state => !state)
  }
  return (
    <div className="App container mx-auto px-10 lg:px-40 mb-10">
      {start ? <Quiz /> : <Start start={getStarted} />}
    </div>
  )
}

export default App
