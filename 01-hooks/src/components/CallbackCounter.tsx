import React from "react"

const Button = React.memo(({ onClick, children }) => {
  console.log("BUtton rendered")
  return (<button onClick={onClick} > {children}</button>)
})


export default function CallbackCounter() {
  const [count, setCount] = React.useState(0)
  const [buster, setBuster] = React.useState(0)
  const increment = React.useCallback(() => {
    setCount(c => c + 1)
    setCount(c => c + 1)
  }, [buster])
  // setCount(count + 1)

  return <div>
    <p>Count: {count} </p>
    <input type="slider" min={0} max={10} value={buster} onChange={e => setBuster(e.target.value)} />
    <Button onClick={increment}>Increment</Button>
  </div>
}