import { useState } from 'react'
import './App.css'
import Pneu from './components/Pneu';
import Noel from './components/Noel';
import Media from './components/Media';
import Bondinho from './components/Bondinho';



function App() {
const [tela, setTela] = useState('');

  return (
    <>
    <div>
      <nav className='navigation'>
          <button onClick={() => setTela(<Pneu />)} className="buttons">
          <span> Pressão Pneus </span>
          </button>
          <button onClick={() => setTela(<Noel />)} className="buttons">
          <span> Papai Noel </span>
          </button>
          <button onClick={() => setTela(<Media />)} className="buttons">
          <span> Calculadora Média</span>
          </button>
          <button onClick={() => setTela(<Bondinho />)} className="buttons">
          <span> Pessoas no Bondinho</span>
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
