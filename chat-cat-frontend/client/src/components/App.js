import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'

// import Welcome from './Welcome'


function App() {
  const [id, setId] = useLocalStorage('id')
  
  return (
    <>
      <h2>Chat Cat</h2>
      {id}
      <Login onIdSubmit={setId} />
    </>
  )
}

export default App;
