import { useState } from "react";


function DescontoFeira() {
  const[valor, setvalor] = useState(0);
  const[qtd, setqtd] = useState(0);

  function calcularDesconto() {
    let total = 0;
    let valorUn;
    let quantidadeMaca = Number(prompt("Quantas maçãs vai comprar?"));

    if (quantidadeMaca < 12) {
      valorUn = 0.30; 
         
    } else {
      valorUn = 0.25;

    }
    
    total = quantidadeMaca * valorUn;
  
    setqtd(quantidadeMaca)
    setvalor(total.toFixed(2))

  }

  return (
    <div>
        <h2>1.3 - Desconto na feira</h2>
        <p>-| Função para calcular desconto na feira. |-</p>
        <p>| Cada maçã custa R$ 0,30 a partir de 12 cada uma sai por R$ 0,25. |</p>
        <p>___________________________________________________________________</p>
        <p>Valor total da compra: R${valor} </p>
        <p>Quantidade de maçãs compradas: {qtd}</p>
        <button onClick={calcularDesconto}>Calcular Desconto</button>
        

    </div>
  )
}

export default DescontoFeira