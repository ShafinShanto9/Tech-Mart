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
        <img src='https://i.ibb.co/jfKH4W7/Apple-Mac-Book-Pro-Late-2021-Banner-1664022685.jpg' className='home-banner w-100 h-50' />
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
        <img src="https://i.ibb.co/k8fh3XH/5-Homepage5.jpg" className='w-100' alt="" />
      </div>
      <div className='recent-products-container container mt-4 text-center mt-5'>
          <h2>Categorise</h2>
          <h6>Get Your Desired Product from Featured Category!</h6>
        <Row className='mt-4'>
            {categorise?.map((category) => (
                <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                  <Col md={2} xs={6}>
                  <div className="cursor-pointer p-2 d-flex flex-column column-gap-4 justify-content-center align-items-center category-card" >
                    <div>{<i className={`${category.icon} fa-3x`}></i>}</div>
                    <div><p className='category-text'>{ category?.name}</p></div>
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