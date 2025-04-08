import React from "react"
const initialState = { count: 0 };

type ReducerActions = "increment" | "decrement" | "reset" | "incrementLoads"

function reducer(state: typeof initialState, action: { type: ReducerActions }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'incrementLoads':
      return { count: state.count + 5 }
    case 'reset':
      return { count: 0 }
    default:
      throw new Error();
  }
}

export default function useCounter() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  React.useDebugValue(state.count > 0 ? 'Positive' : 'Zero or non-positive')
  return [state, dispatch]
}