
function Voto() {

  function processarIdade() {
    let idade = Number(prompt("Digite sua idade:"))
    if (idade < 16) {
      alert("Não pode votar");
    } else if (idade == 16 || idade == 17 || idade > 65) {
      alert("Voto facultativo")
    } else if (idade >=18 && idade <=65) {
      alert("Voto Obrigatório")
    }

  }

  return (
    <div className={"voto-container"}>
      <h2>1.2 - Idade para votar</h2>
      <p>-| Função para verificar os requisitos de idade para votar. |-</p>
      <button onClick={processarIdade}>Verificar Idade</button>



    </div>
  )
}

export default Voto