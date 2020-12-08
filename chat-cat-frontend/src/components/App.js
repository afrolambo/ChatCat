import React, { useState } from 'react'
import Login from './Login'

function App() {
  const [id, setId] = useState()

  return (
    <>
      <h2>Chat Cat</h2>
      {id}
      <Login onSubmitId={setId} />
    </>
  )
}

export default App;
