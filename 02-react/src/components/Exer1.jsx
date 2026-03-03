import { useState } from 'react';


function Exer1() {
    const[tabuada, setTabuada] = useState([])
    
    function calcTabuada() {
        let inputUser = Number(prompt("Digite o número da tabuada"));
        let resultado;
        let total = [];
        
        for (let i = 1; i <= 10; i++) {
            resultado = inputUser * i;
            total.push(`${inputUser} x ${i} = ${inputUser * i}`)
            
            
        }

        setTabuada(total)
        
    }
    

  return (
    <div>
        <div className='grid place-items-center h-100'>
            <button on onClick={calcTabuada} class="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50"><span class="relative z-10">Calcular Tabuada</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-emerald-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
            {tabuada.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
    </div>
  )
}

export default Exer1