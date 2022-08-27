import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../resources/SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        
    }
  return (
    <Container>
        <Row>
            <Col md={6} className='signup_form_container'>
                <Form style={{width:'100%'}} onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                      <Form.Group className='mb-3'>
                          <Form.Label >Email Address</Form.Label>
                          <Form.Control type='email' placeholder="type email address" value={email} required
                          onChange={e => setEmail(e.target.value) }/>       
                      </Form.Group>
                      <Form.Group className='mb-3'>
                          <Form.Label className='mb-3'>Password</Form.Label>
                          <Form.Control type='password' placeholder="type password" value={password} required
                          onChange={e => setPassword(e.target.value) }/>
                      </Form.Group> 
                      <Form.Group className='mb-3'>
                          <Button type="submit">
                              Login
                          </Button>
                      </Form.Group>
                      <p>Already have an account? Please <Link to='/login'>Login</Link></p>
                </Form>
            </Col>      
              <Col md={6} className='signup_image-container'>
                
              </Col>      
        </Row>      
    </Container>
  )
}

export default SignUp