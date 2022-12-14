import React from 'react'
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../features/userSlice.js'
import '../styles/Navigation.css'


const Navigation = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div>
    <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href="#home">TECH MART</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {!user && (
                      <LinkContainer to="/login">
                          <Nav.Link>Login</Nav.Link>
                      </LinkContainer>
              )}
              {user && !user.isAdmin && (
                  <LinkContainer to="/cartpage">
                    <Nav.Link>
                      <i className="fas fa-shopping-cart"></i>
                        {user?.cart.count > 0 && (
                          <span className="badge badge-warning" id="cartcount">
                            {user.cart.count}
                          </span>
                        )}
                    </Nav.Link>
                  </LinkContainer>
              )}
              
              {
                user && (
                  <NavDropdown className='email-text' title={`Welcome 😀 ${user.email}`} id="basic-nav-dropdown">
                  {user.isAdmin && (
                    <>
                     <LinkContainer to="/admin">
                        <NavDropdown.Item>Admin Dashboard</NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to="/new-product">
                         <NavDropdown.Item>Create Product</NavDropdown.Item>
                       </LinkContainer>
                     </>
                   )}
                    {!user.isAdmin && (
                      <>
                      <LinkContainer to="/cartpage">
                          <NavDropdown.Item>Cart</NavDropdown.Item>
                           </LinkContainer>
                           <LinkContainer to="/orders">
                             <NavDropdown.Item>My orders</NavDropdown.Item>
                        </LinkContainer>
                      </>
                    )}
                    <NavDropdown.Divider />
                      <Button variant="danger" onClick={handleLogout} className="logout-btn">
                         Logout
                      </Button>
                  </NavDropdown>
                )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    </div>
  )
}

export default Navigation