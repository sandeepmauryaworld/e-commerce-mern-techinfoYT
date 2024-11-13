import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ratings from '../components/Ratings';

const ProductScreen = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>

      <Card.Img variant="top" src={product.image} />
        </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
        <Card.Title as='div'>
            <strong>{product.name}</strong>
            </Card.Title>
        </a>
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