import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import categorise from '../resources/categorise.js'
import { Row, Col } from 'react-bootstrap'
import '../styles/Home.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../axios.js'
import { updateProducts } from '../features/productSlice.js';
import ProductShow from '../components/ProductShow.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <div className='w-100'>
        <img src='https://i.ibb.co/2KPHW3S/ef8083bfe79088dc00bd8eca9c821cd5.jpg' className='home-banner w-100 h-50' />
      {/* Featured Product */}
      <div className='featured-product-container container mt-4'>
          <h2>Latest Product</h2>
           <div className="d-flex justify-content-center flex-wrap">
              {lastProducts.map((product) => (
                  <ProductShow {...product} />
              ))}
            </div>
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
                  <Col md={3}>
                  <div className="cursor-pointer p-2 d-flex flex-column justify-content-center align-items-center" style={{ margin:'10px',}} >
                    <div>{<i className={`${category.icon} fa-4x`}></i>}</div>
                    <div>{ category?.name}</div>
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