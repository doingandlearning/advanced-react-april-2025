import React from "react";

export default function useFetch(url: string) {
  const [data, setData] = React.useState<null | any>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<null | { message: string }>(null)

  React.useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        React.useDebugValue("About to fetch ...")
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Something went wrong: ${response.status} ${response.statusText}`)
        const result = await response.json()
        if (isMounted) {
          setData(result)
          React.useDebugValue(result)
          setLoading(false)
        }
      } catch (error) {
        if (error instanceof Error) {
          if (isMounted) {
            setError({ message: error.message })
          }
        }
      }
    }
    fetchData(
    )
    return () => { isMounted = false }
  }, [url])

  return { data, loading, error }
}