import React, { useState } from 'react'
import Login from './Login'

// import Welcome from './Welcome'


function App() {
  const [id, setId] = useState()
  
  return (
    <>
      <h2>Chat Cat</h2>
      {id}
      <Login onIdSubmit={setId} />
    </>
  )
}

export default App;
