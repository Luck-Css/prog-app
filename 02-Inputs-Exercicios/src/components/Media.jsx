import {useState} from 'react'

function Media() {
    const [inputNota1, setInputNota1] = useState('');
    const [inputNota2, setInputNota2] = useState('');
    const [resultado, setResultado] = useState('');
    
    function calcularMedia() {
        let media = (inputNota1 + inputNota2) / 2;

        if (media >= 7) {
            setResultado(`Você foi aprovado com média: ${media}`);
        } else if (media >= 4) {
            setResultado(`Você ficou em recuperação com média: ${media}`);
        } else {
            setResultado(`Você foi reprovado com média: ${media}`);
        }
    }

  return (
    <div>
        <div className='input-container'>
            <label htmlFor="">Digite a 1º nota:</label>
            <input type="text" value={inputNota1} onChange={(e) => setInputNota1(Number(e.target.value))}/>
        </div>
        <div className='input-container'>
            <label htmlFor="">Digite a 2º nota:</label>
            <input type="text" value={inputNota2} onChange={(e) => setInputNota2(Number(e.target.value))}/>
            <br />
        </div>
        <div className='button-container'>
            <button onClick={calcularMedia}>
                <span className="button_top"> Calcular Média</span>
                </button>
            <p>Resultado = {resultado}</p>
        </div>
    </div>
  )
}

export default Media