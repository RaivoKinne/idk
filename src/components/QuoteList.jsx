import { useEffect } from "react"
import { useState } from "react"
import Quote from "./Quote";

export default function QuoteList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setIsLoading(true)
      try {
        const res = await fetch("https://dummyjson.com/quotes");
        const resData = await res.json();
        setData(resData.quotes)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  if (error) {
    return <div>{error.message}</div>
  }

  const quoteJSX = data.map((quote) => {
    return <Quote key={quote.id} quote={quote} />
  })

  return isLoading ? <div>Loading...</div> : quoteJSX
}
