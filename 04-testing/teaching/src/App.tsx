import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import GreetingInput from './components/Greeting'
import { ThemeProvider } from './context/ThemeContext'
import DataDisplay from './components/DataDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm onSubmit={() => console.log("Submitted")} />
      <ThemeProvider>

        <GreetingInput />
      </ThemeProvider>
      <DataDisplay url="https://swapi.dev/api/planets/1" />
    </>
  )
}

export default App
