import React, {useRef} from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Login() {
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type="text" ref={idRef}></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}
