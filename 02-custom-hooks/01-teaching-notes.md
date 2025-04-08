# Section 2: Custom Hooks

## Why Custom Hooks?

Custom hooks let you extract and reuse logic across components without duplicating code or affecting component structure.

### Key Benefits
- **Code Reusability** – Share stateful logic across components
- **Separation of Concerns** – Keep UI logic separate from data/state logic
- **Encapsulation** – Centralise and isolate complex behaviours
- **Improved Readability** – Components become smaller and easier to reason about

---

## What is a Custom Hook?

- A function that starts with `use` and calls other hooks
- Must follow the **Rules of Hooks**
- Lets you reuse logic without changing your component hierarchy

---

## Developing Custom Hooks

1. **Identify the repeated or complex logic**  
2. **Write a function that starts with `use`**
3. **Use built-in hooks inside it (`useState`, `useEffect`, etc.)**
4. **Return whatever values the consuming component needs**
5. **Use the hook in your component just like any other**

We’ll explore two patterns:
- `useCounter` – reusable local reducer logic
- `useFetch` – async side-effect management
