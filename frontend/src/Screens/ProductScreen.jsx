/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    Col,
    Image,
    ListGroup,
    Row,
    Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productAction';

import Loader from '../components/Loader';
import Message from '../components/Message';

function ProductScreen({ match, history }) {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match.params.id]);

    const addToCartHandler = () =>{
        console.log('Add to cart:', match.params.id)
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            {/* {product.name} */}

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
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

                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>

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
                                                {product.countinStock > 0
                                                    ? 'In Stock'
                                                    : 'Out of Stock'}
                                            </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countinStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col> Qty </Col>
                                            <Col xs="auto" className="my-1">
                                                <Form.Control
                                                    as="select"
                                                    value={qty}
                                                    onChange={(e) =>
                                                        setQty(e.target.value)
                                                    }
                                                >
                                                    {[
                                                        ...Array(
                                                            product.countinStock
                                                        ).keys(),
                                                    ].map((x) => (
                                                        <option
                                                            key={x + 1}
                                                            value={x + 1}
                                                        >
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                                
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCartHandler }
                                        className="btn-block"
                                        disabled={product.countinStock === 0}
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
            )}
        </div>
    );
}

export default ProductScreen;
