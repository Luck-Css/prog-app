import { useState } from 'react'
import './App.css'

function App() {
  const [inputNome, setInputNome] = useState("");
  function cadastrar () {
    console.log("Cadastrar:" + inputNome)
  }


  return (
    <>
    <div>
      <h1>Inputs Controlados</h1>
      Nome: <input type="text" value={inputNome} onChange={(e) => setInputNome(e.target.value)} className='input'/>
    </div>
  
      <button onClick={cadastrar}>Cadastrar</button> 
    


    </>
  )
}

export default App
