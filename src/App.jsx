import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='flex h-screen justify-center items-center font-bold text-9xl text-indigo-500'>Hello world</div>
    </div>
  )
}

export default App
