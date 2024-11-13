import React from 'react'
import products from '../Product'
import { Col, Row } from 'react-bootstrap'
import ProductScreen from './ProductScreen'



const HomeScreen = () => {
  return (
    <Row>
        {products.map((product,index)=>{
            return(
                <Col key={product.id} md={3}>
                <ProductScreen product={product}/>
                </Col>
            )
        })}
        
        </Row>
  )
}

export default HomeScreen