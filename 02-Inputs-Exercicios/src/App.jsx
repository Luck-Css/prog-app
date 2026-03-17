import { useState } from 'react'
import './App.css'
import Pneu from './components/Pneu';
import Noel from './components/Noel';
import Media from './components/Media';



function App() {
const [tela, setTela] = useState('');


  return (
    <>
    <div>
      <nav className='navigation'>
          <button onClick={() => setTela(<Pneu />)}>
          <span className="button_top"> Pressão Pneus </span>
          </button>
          <button onClick={() => setTela(<Noel />)}>
          <span className="button_top"> Papai Noel </span>
          </button>
          <button onClick={() => setTela(<Media />)}>
          <span className="button_top"> Calculadora Média</span>
          </button>
  
      </nav>
      <h1>Inputs Controlados</h1>
    </div>

    <hr />
    {tela}
 
    </>
  )
}

export default App
