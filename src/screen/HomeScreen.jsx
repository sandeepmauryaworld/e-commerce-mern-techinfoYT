import React, { useEffect, useState } from 'react'
import products from '../Product'
import { Col, Row } from 'react-bootstrap'
import ProductScreen from './ProductScreen'
import axios from 'axios'



const HomeScreen = () => {
  const [productList,setProductList]=useState([])



  useEffect(()=>{
    const fetchProducts=async()=>{

      const {data}=await axios.get('/api/products')
      setProductList(data)
    } 

    fetchProducts()
  },[])

  console.log(productList,'qqqqqqq');
  
  
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