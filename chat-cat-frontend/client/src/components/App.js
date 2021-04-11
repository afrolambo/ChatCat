import React, { useState } from 'react'
import Login from './Login'
import { Container} from 'react-bootstrap'

function App() {
  const [id, setId] = useState()
  
  return (
    <div>
      <Container>
        <h2>Chat Cat</h2>
      </Container>
      <Container>
        <Login onIdSubmit={setId}/>
      </Container>
    </div>
  )
}

export default App;
