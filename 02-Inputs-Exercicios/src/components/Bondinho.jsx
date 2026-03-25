import {useState} from 'react'

function Bondinho() {
    const [alunos, setalunos] = useState('');
    const [monitores, setMonitores] = useState('');
    const [resultado, setResultado] = useState ('');
    

    function calcPeso() {
        let total = Number(alunos) + Number(monitores);
 

        if (total <= 50) {
            setResultado("O Bondinho pode subir!")
        } else {
            setResultado("O Bondinho não pode subir. limite de pessoas ultrapassado!")
        }


    }
  return (
    <div>
        <div className='input-container'>
            <label htmlFor="">Digite a quantidade de alunos que vão entrar no bondinho:</label>
            <input type="text" value={alunos} onChange={(e) => setalunos(e.target.value)} />
            <label htmlFor="">Digite a quantidade de Monitores que vão entrar no bondinho:</label>
            <input type="text" value={monitores} onChange={(e) => setMonitores(e.target.value)} />
        </div>
        <div className='button-container'>
            <button onClick={calcPeso} className='buttons'>Calcular total de pessoas</button>
            <p>{resultado}</p>

        </div>

    </div>
  )
}

export default Bondinho