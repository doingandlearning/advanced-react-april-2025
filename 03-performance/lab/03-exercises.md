# Section 3 Exercises: Performance Optimization

## Exercise 1: Code Splitting

**Goal**: Implement code splitting using `React.lazy`.

Steps:
1. Add a boolean `show` state.
2. Conditionally render a `<TaskManager />` component.
3. Use `React.lazy()` to dynamically import `TaskManager`.
4. Wrap it in `<Suspense fallback={...}>`.

---

## Exercise 2: Memoization with useMemo

**Goal**: Prevent expensive recalculations.

Steps:
1. Identify a computation in your app (e.g. calculating total tasks).
2. Use `useMemo` to memoize the result.
3. Only recompute when input changes.

---

## Exercise 3: Virtualized Lists (Optional)

**Goal**: Implement virtualization with `react-window`.

Steps:
1. Install `react-window`.
2. Replace your list rendering with `<FixedSizeList />`.
3. Style items and adjust `itemSize` and `height`.

---

## Exercise 4: Profiling and Optimization

**Goal**: Explore and interpret performance data.

Steps:
1. Use React DevTools Profiler tab to record interaction.
2. Identify unnecessary renders or expensive updates.
3. Use tools like vite-plugin-visualizer to audit your bundle.

----

## Exercise 5: useTransition