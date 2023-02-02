import { useState } from 'react'
import './App.css'

import Kanban from './components/Kanban'

function App() {


  return (
    <div className='top'>

       <h1 className='top_header'>Kanban Interface</h1>
       <Kanban />
    
    </div>
  )
}

export default App
