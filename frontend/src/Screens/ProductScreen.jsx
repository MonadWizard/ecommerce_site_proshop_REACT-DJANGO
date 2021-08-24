/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

function ProductScreen({ match }) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(
                `/api/products/${match.params.id}`
            );
            setProduct(data);
        }

        fetchProduct();
    }, [match.params.id]);

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            {/* {product.name} */}
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} review`}
                                color="#f8e825"
                            />
                        </ListGroup.Item>

                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

                        <ListGroup.Item>
                            <p>Description: ${product.description} </p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        <strong>
                                            {product.countInStock > 0
                                                ? 'In Stock'
                                                : 'Out of Stock'}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    className="btn-block"
                                    disabled={product.countInStock === 0}
                                    type="button"
                                >
                                    {' '}
                                    Add to Cart{' '}
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ProductScreen;
