import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'

function App() {
  const [id, setId] = useLocalStorage()

  return (
    <>
      <h2>Chat Cat</h2>
      {id}
      <Login onSubmitId={setId} />
    </>
  )
}

export default App;
