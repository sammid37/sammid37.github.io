import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>🌷Em breve...</h1>
      <h3>Um portfolio cheio de arte e códigos</h3>
      <div className="card">
        <p>Em construção...</p>
      </div>
      <p className="read-the-docs">
        Made with 💗 by <i>Samantha Dantas Medeiros</i>.
      </p>
    </>
  )
}

export default App
