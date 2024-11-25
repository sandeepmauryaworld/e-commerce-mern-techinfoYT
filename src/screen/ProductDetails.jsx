import React from "react";
import products from "../Product";
import { Row, Col, ListGroup, Button, Image, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Ratings from "../components/Ratings";
const ProductDetails = ({ match }) => {
    const {id}=useParams()
  const Product = products.find((p) => p._id ===id);
  return (
    <div>
      <Link to='/'>GO Back</Link>
      <Row>
        <Col md={6}>
          <Image src={Product.image} alt={Product.image} fluid />
        </Col>
        <Col md={3}>
        <ListGroup variant="flush">
            <ListGroupItem>
                <h3>{Product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
                <Ratings value={Product.rating} text={`${Product.numReviews}Reviews`}/>
            </ListGroupItem>
            <ListGroupItem>
              Price:-{Product.price}
            </ListGroupItem>
            <ListGroupItem>
              Description:-{Product.description}
            </ListGroupItem>
        </ListGroup>
        </Col>
        <Col md={3}>
        <ListGroupItem>
          <Row>
            <Col>
            Status :
            </Col>
            <Col>
            {Product.countInStock=== 0 ? "Product Out Of Stock":'Product In Stock'}
            </Col>
          </Row>

        </ListGroupItem>
        <ListGroupItem>
          <Button className="btn-block " type="button">Add to Cart</Button>
        </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
