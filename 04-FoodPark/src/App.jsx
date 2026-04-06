import { useState } from 'react'
import './App.css'
import Home from './assets/Components/Home'
import Food01 from './assets/Components/Food01'
import Food02 from './assets/Components/Food02'

function App() {
  const [tela, setTela] = useState(<Home />)

  return (
    <>
      <div className='bg-amber-50 min-h-screen p-4'>

        <header className='flex flex-row'>
          <h1 className='font-bold basis-3xs'>FOOD PARK</h1>
          <nav className='flex justify-center gap-4 '>
            <button onClick={() => setTela(<Home />)}>HOME</button>
            <button onClick={() => setTela(<Food01 />)}>FOOD-01</button>
            <button onClick={() => setTela(<Food02 />)}>FOOD-02</button>
          </nav>
        </header>

        <section>
          {tela}
        </section>


      </div>
    </>
  )
}

export default App
