import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'
import useFetch from './hooks/useFetch'
import URLFetcher from './components/URLFetcher'

function App() {
  const [state, dispatch] = useCounter()
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })} >+</button>
      <URLFetcher />
    </>


  )
}

export default App
