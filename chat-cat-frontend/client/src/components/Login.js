import React, {useRef} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Login() {
    const idRef = useRef()

    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
            <Form className="w-100">
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    )
}
