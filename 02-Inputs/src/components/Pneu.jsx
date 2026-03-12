import {useState} from 'react'
import './Pneu.css'

function Pneu() {
    const [pressaoPneu, setPressaoPneu] = useState("");
    const [pressaoBomba, setPressaoBomba] = useState("");
    const [resultado, setResultado] = useState("");
    
    function calcularPressao() {
        
        
        if (pressaoPneu > pressaoBomba) {
            setResultado (pressaoPneu - pressaoBomba);
        } else {
            setResultado(pressaoBomba - pressaoPneu);
        }

    }


  return (
    <div>
        <div className='input-container'>
            <label htmlFor="">Pressão Pneu:</label>
            <input type="number" value={pressaoPneu} onChange={(e) => setPressaoPneu(e.target.value)}/>
        </div>

        <div className='input-container'>
            <label htmlFor="">Pressão Desejada:</label>
            <input type="number" value={pressaoBomba} onChange={(e) => setPressaoBomba(e.target.value)}/>
        </div>

        <div className='button-container'>
            <button onClick={calcularPressao}>Calcular Pressão</button>
        </div>

        <div>
            <p>A diferença de pressão é: {resultado}</p>
        </div>


 
    </div>
  )
}

export default Pneu