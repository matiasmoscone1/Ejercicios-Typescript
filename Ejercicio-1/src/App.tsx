import { useState } from 'react'
import data from "../src/data/data.json";
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  console.log(data);

  return (
    <>
      <header>
        <h1>Lista de tareas</h1>
      </header>
      <section>
        
      </section>


    </>
  )
}

export default App
