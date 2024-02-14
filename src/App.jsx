import { useState } from 'react'
import data from './data'
const App = () => {
  const [pAmount, setPAmount] = useState(1)
  const [text, setText] = useState([])

  function onSubmit(e) {
    e.preventDefault()
    setText(data.slice(0, pAmount))

  }
  return (
    <section className='section-center'>
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form className='lorem-form' onSubmit={onSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input onChange={(e) => setPAmount(e.target.value)} type="number" value={pAmount} min={1} max={data.length - 1} step={1} name='pAmount' id='pAmount' />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map(p => <p key={p}>{p}</p>)}
      </article>
    </section>
  )
}
export default App
