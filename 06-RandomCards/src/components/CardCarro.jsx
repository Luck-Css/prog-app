import './cards.css'

function CardCarro(prop) {
  return (
    <div className='card-content'>
        <p>Modelo: {prop.p.modelo}</p>
        <p>Marca:{prop.p.marca}</p>
        <p>Ano:{prop.p.ano}</p>
        <p>Cor:{prop.p.cor}</p>
        <p>KM:{prop.p.quilometragem}</p>

    </div>

  )
}

export default CardCarro