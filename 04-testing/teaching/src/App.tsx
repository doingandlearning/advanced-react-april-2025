import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import GreetingInput from './components/Greeting'
import { ThemeProvider } from './context/ThemeContext'
import DataDisplay from './components/DataDisplay'
// import { ErrorBoundary } from 'react-error-boundary'
import ErrorBoundary from './ErrorBoundary'
function App() {
  const [count, setCount] = useState(1)
  // console.log("I'm here!")
  // console.time("Fun")
  // console.timeLog("Fun")
  // console.timeEnd("Fun")
  // console.trace()
  // console.assert(count === 0)
  // console.count("test")
  // console.countReset("test")
  // const user = { name: "Kevin", location: "London" }
  // console.group()
  // console.table(user)
  // console.log("Who knew how great console was?")
  // console.groupEnd()
  // console.table([1, 2, 3, 4])
  // console.dir(useState)
  console.info("THis is a warning")
  console.debug()

  return (
    <>
      {/* <LoginForm onSubmit={() => { debugger }} /> */}
      <ThemeProvider>
        <ErrorBoundary fallback={<p>GreetingInput failed to render.</p>}>
          <GreetingInput />
        </ErrorBoundary>
      </ThemeProvider>
      <DataDisplay url="https://swapi.dev/api/planets/1" />
    </>
  )
}

export default App
