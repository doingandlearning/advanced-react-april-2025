# Custom Hooks Lab: Refactor `TaskManager` with `useTasks`

## Objective

Refactor the `TaskManager` component to use a custom hook named `useTasks`. This will encapsulate logic for managing and interacting with a task list.

---

## Why This Matters

- **Reuse logic** like `addTask` and `deleteTask` in multiple components
- **Keep components clean and focused** on rendering
- **Encapsulate complex logic** and side effects like highlighting or timeouts

---

## Step-by-Step Instructions

### 🛠 Part 1: Create `useTasks`

1. **Create a new file**: `useTasks.js`
2. **Define initial state**: probably just `{ tasks: [], highlightedTaskId: null }`
3. **Implement reducer** with actions: `add`, `delete`, `highlight`, `clearHighlight`
4. **Use `useReducer`** to manage state
5. **Use `useCallback`** for handlers like `addTask` and `deleteTask`
6. **Use `useEffect`** to clear the highlight after 2 seconds
7. **Return** `{ tasks, highlightedTaskId, addTask, deleteTask }`

---

### 🧩 Part 2: Refactor `TaskManager`

Use the hook inside your component:

```jsx
const { tasks, highlightedTaskId, addTask, deleteTask } = useTasks();
```

Render the list, and apply a special class or style to the highlighted item.

---

## Questions to Reflect On

- Why is `useCallback` helpful here?
- How does this hook improve the component?
- What tests might you write to confirm it works?

---

## Stretch Goals

- Add persistence via `localStorage`
- Add undo functionality with a custom `useUndo` hook
- Log actions to console or local dev tool

---

## Sample Implementation (if stuck)

[Link to solution Gist](https://gist.github.com/doingandlearning)
