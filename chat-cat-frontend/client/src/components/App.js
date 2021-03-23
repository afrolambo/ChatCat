import React, {useState} from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'

// import Welcome from './Welcome'


function App() {
  const [id, setId] = useState()
  
  return (
    <>
      <h2>Chat Cat</h2>
      {id ? <Dashboard id={id} /> :  <Login onIdSubmit={setId} />}
     
    </>
  )
}

export default App;
