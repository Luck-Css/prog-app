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

        <header className='grid grid-cols-3 items-center '>
          <h1 className='font-black text-3xl m-2'>FOOD PARK</h1>
          <nav className='grid grid-cols-3 gap-2 bg-amber-200 rounded-3xl font-bold px-4 py-2 '>
            <button onClick={() => setTela(<Home />)}>HOME</button>
            <button onClick={() => setTela(<Food01 />)}>Churrascaria do Gaúcho</button>
            <button onClick={() => setTela(<Food02 />)}>Taberna periódica</button>
          </nav>
        </header>

        <section className='px-6 py-4'>
          {tela}
        </section>


      </div>
    </>
  )
}

export default App
