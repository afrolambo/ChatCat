import React, { useState } from 'react'
import Login from './Login'
import { Container} from 'react-bootstrap'

function App() {
  
  return (
    <div>
      <Container>
        <h2>Chat Cat</h2>
      </Container>
      <Container>
        <Login />
      </Container>
    </div>
  )
}

export default App;
