import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './components/ReducerComponent'

function App() {
  const [count, setCount] = useState(0)
  const buttonRef = React.useRef<null | HTMLButtonElement>(null)

  React.useEffect(() => {
    console.log("useEffect was run!")
    if (!buttonRef.current) {
      return
    }
    buttonRef.current.focus()
  }, [buttonRef])
  console.log(buttonRef.current)
  console.log("I was rendered!")
  return (
    <>

      <div className="card">
        <button ref={buttonRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <FormComponent />
    </>
  )
}

export default App
