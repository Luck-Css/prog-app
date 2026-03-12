import { useState } from 'react'
import './App.css'
import Pneu from './components/Pneu';

function App() {
  const [inputNome, setInputNome] = useState("");
  function cadastrar () {
    console.log("Cadastrar:" + inputNome)
  }


  return (
    <>
    <div>
      <h1>Inputs Controlados</h1>
    </div>

{/*     <div>
      Nome: <input type="text" value={inputNome} onChange={(e) => setInputNome(e.target.value)} className='input'/>
    </div>
      <button onClick={cadastrar}>Cadastrar</button> */}

    <hr />
    <div>
      <Pneu />
      <hr />
    </div>
    


    </>
  )
}

export default App
