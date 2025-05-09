import { useReducer } from 'react';

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

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>0</button>
      <button onClick={() => dispatch({ type: 'incrementLoads' })}>++</button>
    </div>
  );
}
// Add a reset state
// Add a +5 -5