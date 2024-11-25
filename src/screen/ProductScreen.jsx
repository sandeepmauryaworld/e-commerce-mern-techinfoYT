import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ratings from '../components/Ratings';
import { Link } from 'react-router-dom';

const ProductScreen = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`} >

      <Card.Img variant="top" src={product.image} />
        </Link>
      <Card.Body>
      <Link to={`/product/${product._id}`} >
        <Card.Title as='div'>
            <strong>{product.name}</strong>
            </Card.Title>
        </Link>
       <Card.Text as={'div'}>
        
            <Ratings value={product.rating} text={`from ${product.numReviews}`} />
            
       </Card.Text>
       <Card.Text as={'div'}>
        <div className='my-3'>💲{product.price} </div>
       </Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default ProductScreen