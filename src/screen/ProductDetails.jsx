import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, ListGroup, Button, Image, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Ratings from "../components/Ratings";

const ProductDetails = () => {
  const { id } = useParams(); // Extract the product ID from the route
  const [product, setProduct] = useState({}); // Initialize product as an object

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]); // Add `id` as a dependency

  return (
    <div>
      <Link to="/">GO Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Ratings value={product.rating} text={`${product.numReviews} Reviews`} />
            </ListGroupItem>
            <ListGroupItem>
              Price: {product.price}
            </ListGroupItem>
            <ListGroupItem>
              Description: {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock === 0 ? "Out Of Stock" : "In Stock"}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
