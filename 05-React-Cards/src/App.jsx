import { useState } from 'react'
import './App.css'
import CardGame from './components/CardGame'

function App() {
  const [Games, setGames] = useState([
    {
      id: 0,
      imagem: '',
      nome: 'Resident Evil 4 Remake',
      totalConquistas: 46,
      conquistas: 46,
      categoria: 'Horror, Action'
    },
    {
      id: 1,
      imagem: '',
      nome: 'Resident Evil 2 Remake',
      totalConquistas: 44,
      conquistas: 24,
      categoria: 'Horror, Action'
    },
    {
      id: 2,
      imagem: '',
      nome: 'Resident Evil',
      totalConquistas: 44,
      conquistas: 3,
      categoria: 'Horror, Action'
    },
  ]);

  function cadastrar () {
    let gameNew = {
      id: 3,
      imagem: '',
      nome: 'Resident Evil 3 Remake',
      totalConquistas: 35,
      conquistas: 10,
      categoria: 'Horror, Action'
    }
    setGames([...Games, gameNew])
  }


  return (
    <>
    <div className='app-cont'>
      <h1>Cards Games</h1>
      <div className='cont-card'>
        {
          Games.map( (Game) => (
            <CardGame g={Game} key = {Game.id}/>
          ))

        }
      </div>
      <br />
       <button onClick={cadastrar}>Adicionar Games</button>
    </div>
    </>
  )
}

export default App
