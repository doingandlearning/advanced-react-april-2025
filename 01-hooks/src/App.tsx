import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './components/ReducerComponent'
import Counter from './components/Counter'
import { FormContext, FormProvider } from './context/FormContext'
import Box from './components/Box'
import CallbackCounter from './components/CallbackCounter'

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
      <CallbackCounter />
      <Box />
      <FormProvider>
        <FormComponent />
        <Counter />
      </FormProvider>
    </>
  )
}

export default App
