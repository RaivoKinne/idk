function Quote(props) {
  return (
    <>
      <h1>{props.quote.author}</h1>
      <p>{props.quote.quote}</p>
    </>
  )
}

export default Quote
