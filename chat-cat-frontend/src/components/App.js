import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider'
// import Welcome from './Welcome'


function App() {
  const [id, setId] = useLocalStorage('id')
  
  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )
  return (
    <>
      <h2>Chat Cat</h2>
      {id ? dashboard : <Login onSubmitId={setId} /> }
    </>
  )
}

export default App;
