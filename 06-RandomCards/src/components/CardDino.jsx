import './cards.css'

function CardDino(prop) {
  return (
    <div className='card-content'>
        <p>Nome: {prop.p.nome}</p>
        <p>Família {prop.p.familia}</p>
        <p>Peso: {prop.p.peso}</p>
        <p>Altura: {prop.p.altura}</p>
        <p>Comprimento: {prop.p.comprimento}</p>
        <p>Período: {prop.p.periodo}</p>
    </div>

  )
}

export default CardDino
