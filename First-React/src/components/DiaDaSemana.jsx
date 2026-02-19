function DiaDaSemana() {
    function verificarDia () {
        
        let dia = Number(prompt("Digite um número!(1 - 7)"));
        switch (dia) {
            case 1:
                alert("O dia da semana é Domingo")
                break
            case 2:
                alert("O dia da semana é Segunda-Feira")
                break
            case 3:
                alert("O dia da semana é Terça-Feira")
                break
            case 4:
                alert("O dia da semana é Quarta-Feira")
                break
            case 5:
                alert("O dia da semana é Quinta-Feira")
                break
            case 6:
                alert("O dia da semana é Sexta-Feira")
                break
            case 7
            :
                alert("O dia da semana é Sábado")
                break
            default:
                alert("Digite um número entre 1 e 7")
                break;
        }
        return dia;
        
    }
  return (
    <div>
        <h2>1.1 - Dias da semana</h2>
        <button onClick={verificarDia}>Verificar os dias da semana</button>
    </div>
    
  )
}

export default DiaDaSemana