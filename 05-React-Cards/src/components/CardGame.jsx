import "./Components.css"

function CardGame(prop) {
  return (
    <div className="card-content">
      <p>Nome: {prop.g.nome}</p>
      <p>Total de Conquistas: {prop.g.totalConquistas}</p>
      <p>Conquistas Desbloqueadas: {prop.g.conquistas}</p>
      <p>Categoria: {prop.g.categoria}</p>
      
    </div>
  )
}

export default CardGame
