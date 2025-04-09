# Section 3 Code Examples

## Code Splitting with React.lazy and Suspense

```tsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  {show && <LazyComponent />}
</Suspense>
```

You can enhance this with `lazyWithDelay` for teaching purposes:

```tsx
function lazyWithDelay(importFunction, delay) {
  return React.lazy(() =>
    new Promise(resolve => {
      setTimeout(() => resolve(importFunction()), delay);
    })
  );
}

const LazyComponent = lazyWithDelay(() => import('./LazyComponent'), 2000);
```

---

## useMemo for Expensive Computation

```tsx
function calculateTotal(len: number) {
  console.log("calculating...");
  return Array.from({ length: len }, (_, i) => i + 1).reduce((a, c) => a + c, 0);
}

const total = useMemo(() => calculateTotal(value), [value]);
```

Prevents recalculating the total unless `value` changes.

---

## Virtualized Lists with react-window

```tsx
import { FixedSizeList as List } from 'react-window';

<List
  height={700}
  itemCount={data.length}
  itemSize={150}
  width={900}
>
  {({ index, style }) => (
    <div style={style}>
      <h2>{data[index].name}</h2>
    </div>
  )}
</List>
```

Only renders the visible portion of the list.

---

## Profiling

- Use React DevTools → Profiler tab → Record and interact with your app.
- Look for unnecessary re-renders and performance bottlenecks.
- Combine with `useMemo`, `React.memo`, and virtualized rendering to optimise.
