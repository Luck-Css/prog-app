import { useState } from 'react'
import './App.css'
import Home from './assets/pages/Home'
import Products from './assets/pages/Products'
import Contact from './assets/pages/Contact'

function App() {
  const [tela, setTela] = useState(<Home />)

  return (
    <>
      <div className={'cont-app'}>
        <header  className={'cont-header'}>
          <nav className={'cont-nav'}>
            <button className='buttons' onClick={() => setTela(<Home/>)}>Home</button>
            <button className='buttons' onClick={() => setTela(<Products/>)}>Products</button>
            <button className='buttons' onClick={() => setTela(<Contact/>)}>Contact</button>

          </nav>
        </header>

        <br />

        <main className={'cont-main'}>
          {tela}
        </main>
  
      </div>
    </>
  )
}

export default App
