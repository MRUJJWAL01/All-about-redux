import React from 'react'
import Nav from './components/Nav'
import Routing from './routing/Routing'

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <Nav />

      <div>
        <Routing />
      </div>
    </div>
  )
}

export default App