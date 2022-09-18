import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import categorise from '../resources/categorise.js'
import { Row, Col } from 'react-bootstrap'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <div className='w-100'>
        <img src='https://i.ibb.co/Jt83ChV/Shop-Now.png' className='home-banner w-100 h-50' />
      {/* Featured Product */}
      <div className='featured-product-container container mt-4'>
        <h2>Latest Product</h2>
      <div>
        <Link to='/category/all'
        style={{textDecoration:'none', textAlign:'right', display:'block'}}
        >See More{'>>'}</Link>
      </div>
      </div>
      {/* Sale Banner */}
      <div className='sale__banner--container mt-4'>
        <img src="https://i.ibb.co/y6htMHP/Untitled-design-1.png" className='w-100' alt="" />
      </div>
      <div className='recent-products-container container mt-4'>
        <h2>Categorise</h2>
        <Row>
            {categorise?.map((category) => (
                <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                  <Col md={4}>
                  <div style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                    url(${category?.img})`, gap: "10px"
                  }} className="category-tile">
                      {category?.name}
                    </div>
                  </Col>
                </LinkContainer>
              ))}
        </Row>
      </div>
      </div>
    </div>
  )
}

export default Home