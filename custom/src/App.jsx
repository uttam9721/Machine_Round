import React from 'react'
import Tabs from './Tabs'
const App = () => {
  return (
    <div className='app'>
      <h1>Custom Tabs..</h1>
      <Tabs>
        <div className="home">Home</div>
        <div className="about">About</div>
        <div className="contact">Contact</div>
      </Tabs>
    </div>
  )
}

export default App
