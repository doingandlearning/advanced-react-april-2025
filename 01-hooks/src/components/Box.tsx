import React from "react"

export default function Box() {
  const boxRef = React.useRef(null)
  const [width, setWidth] = React.useState(0)

  React.useLayoutEffect(() => {
    if (!boxRef.current) return
    setWidth(boxRef.current.offsetWidth)
    boxRef.current.height = `${boxRef.current.offsetWidth * 0.4}px`
  }, [])


  return <div style={{ width: '100%' }}>
    <div ref={boxRef} style={{ width: '60%', height: '20px', backgroundColor: 'red' }}>
    </div>
    <p>Width: {width}</p>
  </div >
}


export function AutoScrollToBottom() {
  const ref = React.useRef(null);
  const [number, setNumber] = React.useState(12)
  React.useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = number * 30;
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{ maxHeight: 200, overflowY: 'scroll', border: '1px solid gray' }}
    >
      {Array.from({ length: 40 }, (_, i) => (
        <p key={i}>Item {i + 1}</p>
      ))}
    </div>
  );
}
