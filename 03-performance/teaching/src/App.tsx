import './App.css'
import React, { Suspense } from 'react'
import Counter from './component/Counter'

const LazyComponent = React.lazy(() => import("./component/LazyComponent"))

function calculateTotal(len: number) {
  console.log("Calculating ...")
  return Array.from({ length: len }, (_, i) => i + 1).reduce((a, c) => a + c, 0)
}


function App() {
  const [show, setShow] = React.useState(false)
  const [amount, setAmount] = React.useState(1000)
  const total = React.useMemo(() => calculateTotal(amount), [amount])
  return (
    <>
      <button onClick={() => setShow(!show)}>Show</button>
      <Counter />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      {total}
      <Suspense fallback={<div>Loading ....</div>} >

        {show && <LazyComponent />}
      </Suspense>
    </>
  )
}

export default App
