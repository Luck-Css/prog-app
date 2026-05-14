import './cards.css'

function CardCavalo(prop) {
  return (
    <div className='card-content'>
        <p>Nome: {prop.p.nome}</p>
        <p>Raça: {prop.p.raca}</p>
        <p>Pelagem: {prop.p.pelagem}</p>
        <p>Idade: {prop.p.idade}</p>
    </div>
  )
}

export default CardCavalo