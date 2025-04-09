import Counter from "./Counter";

export default function LazyComponent() {
  return (
    <>
      <h2>This is a lazy loaded component</h2>
      <p>It took some time to load, but here it is!</p>
      <Counter />
    </>
  )
}