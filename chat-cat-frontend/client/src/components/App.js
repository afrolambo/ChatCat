import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider'
import { ConversationsProvider } from '../contexts/ConversationsProvider'
import { SocketProvider } from '../contexts/SocketProvider'
// import Welcome from './Welcome'


function App() {
  const [id, setId] = useLocalStorage('id')
  
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  return (
    <>
      <h2>Chat Cat</h2>
      {id ? dashboard : <Login onSubmitId={setId} /> }
    </>
  )
}

export default App;
