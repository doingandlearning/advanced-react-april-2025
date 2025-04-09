# Section 3: Performance Optimization in React

## Overview
In this section, we’ll focus on ways to improve the performance of React applications using:

- **Code splitting**
- **Memoization with `useMemo`**
- **Virtualized lists**
- **Profiling tools**

---

## Code Splitting with React.lazy

React applications grow quickly. To avoid shipping unnecessary code upfront, we can use `React.lazy()` for **code splitting**.

- `React.lazy()` lets you dynamically import a component.
- You must wrap the component in `<Suspense>` with a fallback UI.

You can delay loading components until they are actually needed, reducing initial bundle size.

---

## useMemo for Expensive Calculations

React re-renders every time state or props change. Expensive calculations can slow your app if they’re repeated unnecessarily.

- Use `useMemo` to memoize expensive computations.
- React will reuse the cached value unless dependencies change.

This is particularly useful for calculations, filtered lists, or derived values that are stable unless the inputs change.

---

## Virtualized Lists with react-window

Rendering long lists can be slow. React renders all items into the DOM, which affects performance.

- **react-window** helps by rendering only visible rows.
- Dramatically improves scroll performance for large datasets.

---

## Profiling and Tooling

Performance isn’t always intuitive. Use the right tools to identify bottlenecks:

- **React DevTools Profiler** shows component re-renders and time taken.
- **Vite bundle visualizer** can show bundle size and splitting opportunities.

---