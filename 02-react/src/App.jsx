import { useState } from 'react'
import Iconify from './components/Iconify'
import Exer1 from './components/Exer1'


function App() {


  return (
    <>
      <div className='grid bg-emerald-500 place-items-center h-screen'>
        <div className='grid bg-emerald-200/60 h-180 w-200 rounded-4xl p-4 place-items-center'>
          <Iconify />
          <Exer1 />
        </div>
      </div>
    </>
  )
}

export default App
