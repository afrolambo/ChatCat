import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'
// import Welcome from './Welcome'


function App() {
  const [id, setId] = useLocalStorage('id')

  return (
    <>
      <h2>Chat Cat</h2>
      {id ? <Dashboard id={id} /> : <Login onSubmitId={setId} /> }
    </>
  )
}

export default App;
