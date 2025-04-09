export default function Layout({ children }) {
  console.log("Hello")
  return <>
    <h1>This is cool!</h1>
    <div>
      {children}
    </div>

  </>
}