import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        
    }
  return (
    <Container>
        <Row>
            <Col md={6} className='login_form_container'>
                <Form style={{width:'100%'}} onSubmit={handleSubmit}>
                    <h1>Please Login To Your Account</h1>
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
                          <Button type="submit">
                              Login
                          </Button>
                      </Form.Group>
                      <p>Don't have an account? Please <Link to='/signup'>Create Account</Link></p>
                </Form>
            </Col>      
            <Col md={6} className='login_image-container'></Col>
        </Row>      
    </Container>
  )
}

export default Login