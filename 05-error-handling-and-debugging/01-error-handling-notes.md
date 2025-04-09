# Section 5: Error Handling and Debugging

## Overview

In this section, we cover the practices and tools needed to make your React applications more resilient and easier to debug.

---

## 1. Logging and Instrumentation

### Purpose:
Track errors and important events, both locally and remotely.

### Techniques:
- Use `console.log`, `console.warn`, `console.error`
- Integrate with remote tools like **Sentry**, **LogRocket**, or **Datadog**

### Example:
```js
console.log("Info");
console.warn("Warning");
console.error("Error");

// Remote logging example
import * as Sentry from "@sentry/react";
Sentry.init({ dsn: "your-dsn-url" });

try {
  throw new Error("Something went wrong");
} catch (error) {
  Sentry.captureException(error);
}
```

---

## 2. Debugging

### Purpose:
Find and fix bugs using browser tools and DevTools.

### Techniques:
- Use browser DevTools to inspect the DOM, breakpoints, and logs.
- Use **React DevTools** to inspect props, state, and renders.
- Use `debugger` keyword to pause execution.

### Example:
```js
function handleClick() {
  debugger; // pauses in DevTools
  console.log("Clicked");
}
```

---

## 3. Error Boundaries

### Purpose:
Catch JavaScript errors in the component tree and show a fallback UI.

### Requirements:
- Must be a **class component**
- Use `getDerivedStateFromError` and `componentDidCatch`

### Example:
```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}
```

Or use [react-error-boundary](https://github.com/bvaughn/react-error-boundary)

---

## Hands-On Exercises

### 🛠 Exercise 1: Logging

- Use `console.log`, `warn`, and `error`
- Add remote logging with a tool like Sentry

---

### 🧪 Exercise 2: Debugging

- Use browser and React DevTools
- Add a `debugger` and inspect values at runtime

---

### 💥 Exercise 3: Error Boundary

- Create an `ErrorBoundary` component
- Wrap a buggy component and show fallback UI
- Trigger and log an error using `componentDidCatch`

---

## Additional Resources

- [MDN Web Docs – Debugging JS](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Debugging)
- [React Docs – Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
- [Sentry Docs](https://docs.sentry.io/platforms/javascript/guides/react/)

---

## Summary

Robust error handling helps catch issues early, reduce user friction, and debug faster. Use logging, debugging tools, and error boundaries together for a resilient React codebase.
