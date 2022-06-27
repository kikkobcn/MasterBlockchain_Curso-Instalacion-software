import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBQ_J6Tml0sldwHMJhyZbSLNqjWWP23cmuw&usqp=CAU" />
        <p>Bull dog frances</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://https://es.wikipedia.org/wiki/Bulldog_franc%C3%A9s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bulldog frances
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
