import './cards.css'

function CardPokemon(prop) {
  return (
    <div className='card-Content'>
        <h3>{prop.p.nome}</h3>
        <img src={prop.p.imagem} alt={prop.p.nome} />
    </div>
  )
}

export default CardPokemon