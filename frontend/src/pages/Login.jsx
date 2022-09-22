import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLoginMutation } from '../services/appApi'
import "../styles/signup.css"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, {isError, isLoading, error}] = useLoginMutation()

    const handleLogin = (e) => {
        e.preventDefault()
        login({ email, password}) 
    }
  return (
    <Container>
        <Row>
            <Col md={6} className='login__form--container'>
                <Form style={{width:'100%'}} onSubmit={handleLogin}>
                      <h1>Please Login To Your Account</h1>
                      {isError && <Alert variant='danger' > {error.data} </Alert>}
                      <Form.Group className='mb-3'>
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type='email' placeholder="type email address" value={email} required
                          onChange={e => setEmail(e.target.value) }/>       
                      </Form.Group>
                      <Form.Group className='mb-3'>
                          <Form.Label>Password</Form.Label>
                          <Form.Control type='password' placeholder="type password" value={password} required
                          onChange={e => setPassword(e.target.value) }/>
                      </Form.Group> 
                      <Form.Group className='mb-3'>
                          <Button type="submit" disabled={isLoading}>
                              Login
                          </Button>
                      </Form.Group>
                      <p>Don't have an account? Please <Link to='/signup'>Create Account</Link></p>
                </Form>
            </Col>      
            <Col md={6} className='login__image--container'></Col>
        </Row>      
    </Container>
  )
}

export default Login