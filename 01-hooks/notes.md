# Section 1: Going Deeper with Hooks

This section covers some of the core React hooks that are often used in more advanced situations. Each example is paired with a real-world use case and an optional hands-on challenge.

## 1. `useRef` — DOM Interaction and Persistent Values

### Use Case

- Access and manipulate DOM elements directly (e.g. focus, scroll, third-party libraries).
- Persist a mutable value across renders without causing a re-render.

### Example: Focus an Input
```jsx
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const handleClick = () => {
    inputEl.current?.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}
```

### Example: Track Render Count
```jsx
import { useEffect, useRef } from 'react';

function RenderCounter() {
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
    console.log('Render count:', count.current);
  });

  return <p>This component has rendered {count.current} times.</p>;
}
```

### Optional Challenge
Create a form with two inputs and a submit button. When the first input is filled out, automatically focus the second one.

---

## 2. `useReducer` — Complex or Predictable State Transitions

### Use Case

- Manage state that involves multiple sub-values or transitions.
- Replace deeply nested `useState` logic with clearer actions.

### Minimal: Reimplementing `useState`
```jsx
import { useReducer } from 'react';

function useCustomState(initialValue) {
  const reducer = (state, action) => action.value;
  const [state, dispatch] = useReducer(reducer, initialValue);
  const setState = value => dispatch({ value });
  return [state, setState];
}
```

### Typical: Counter with Actions
```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

### Optional Challenge
Add a reset button to the counter and introduce a "step" state to increment by 5s.

---

## 💡 Teaching Prompt

> “React re-runs all your code every time your component renders — even expensive stuff. `useMemo` helps you avoid repeating costly calculations when the inputs haven't changed.”

---

## 🧪 Code Demo: useMemo in Action

```jsx
import React, { useMemo, useState } from 'react';

function slowSum(n) {
  console.log('Calculating slow sum...');
  let total = 0;
  for (let i = 1; i <= n; i++) {
    // simulate expensive work
    total += i;
  }
  return total;
}

export default function MemoDemo() {
  const [input, setInput] = useState(10000);
  const [label, setLabel] = useState('');

  // useMemo caches the result unless `input` changes
  const total = useMemo(() => slowSum(input), [input]);

  return (
    <div>
      <h2>useMemo Demo</h2>
      <label>
        Max number to sum:
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
      </label>

      <p>Total: {total}</p>

      <label>
        Unrelated label:
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </label>
    </div>
  );
}
```

---

## 🧠 Teaching Notes

### Without `useMemo`
- Every keystroke (even unrelated fields) re-runs `slowSum`
- See `console.log('Calculating slow sum...')` spammed in the dev console

### With `useMemo`
- Only recalculates when the input to `slowSum` (`input`) changes
- Typing in the unrelated input doesn’t trigger the expensive calculation



---

## 3. `useCallback` — Memoising Functions

### Use Case

- Prevent function re-creations on every render.
- Useful when passing callbacks to memoized child components.

### Example
```jsx
import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, children }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>{children}</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}
```

### Gotchas

- Only useful when passing functions to child components or dependencies to effects.
- Always balance readability vs performance.

### Optional Challenge
Memoize a toggleTheme function and pass it to a themed child component. Show before/after renders.

---

## 4. `useLayoutEffect` — Synchronous Effects After DOM Mutations

### Use Case

- Measure or manipulate layout (e.g. widths, scroll position) before the browser paints.
- Use sparingly, and only when `useEffect` causes visual glitches.

### Example: Measuring Width
```jsx
import React, { useState, useLayoutEffect, useRef } from 'react';

function LayoutEffectExample() {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ width: '50%' }}>
        Resize me
      </div>
      <p>Width: {width}px</p>
    </div>
  );
}
```

### Optional Challenge
Build a tooltip that appears above a button and needs to calculate its position based on the button’s size and placement.

---

## 5. `useDebugValue` — Making Custom Hooks Easier to Debug

> Note: You might want to move this to the Custom Hooks section.

### Use Case

- Improve visibility of internal state in React DevTools.
- Only applies inside custom hooks.

### Example
```jsx
import { useState, useEffect, useDebugValue } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    subscribeToFriendStatus(friendID, handleStatusChange);
    return () => unsubscribeFromFriendStatus(friendID, handleStatusChange);
  }, [friendID]);

  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
```

### Optional Enhancement
Use the formatter argument to delay expensive debug formatting:
```js
useDebugValue(date, d => d.toISOString());
```

---

## Summary

| Hook             | Use Case                                                                 |
|------------------|--------------------------------------------------------------------------|
| `useRef`         | DOM interaction, tracking renders, storing mutable state                 |
| `useReducer`     | Predictable or complex local state, clearer state transitions            |
| `useCallback`    | Prevent re-renders in memoized children                                  |
| `useLayoutEffect`| Layout reads/writes that must happen before browser paint                |


---
