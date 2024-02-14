import { useState } from 'react'

const App = () => {
  const [pAmount, setPAmount] = useState(1)
  function onChangePAmount(e) {
    setPAmount(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log(e)
  }
  return (
    <section className='section-center'>
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form className='lorem-form' onSubmit={onSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input onChange={onChangePAmount} type="number" value={pAmount} min={1} step={1} />
        <button className='btn'>generate</button>
      </form>
    </section>
  )
}
export default App
