import {useState} from 'react'
import './Components.css'

function Noel() {
    const [inputNumero, setInputNumero] = useState('');
    const [frase, setFrase] = useState('');
    function calcularHo() {
        setFrase(`${"HO ".repeat(inputNumero)}`);

        
        
    }
  return (
    <div>
        <div className='input-container'>
            <label htmlFor="">Digite a quantidade de "Ho" desajada:</label>
            <input type="text" value={inputNumero} onChange={(e) => setInputNumero(e.target.value)} />
            <br />
            <p>Velho vai falar: {frase}</p>
        </div>
        <div className='button-container'>
            <button onClick={calcularHo}>
                <span className="button_top"> Calcular "HO HO HO"</span>
                </button>
        </div>
    </div>
    
  )
}

export default Noel