/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../products';

function HomeScreen() {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     async function fetchProducts() {
    //         const { data } = await axios.get('/api/products/');
    //         setProducts(data);
    //     }

    //     fetchProducts();
    // }, []);

    return (
        <div>
            <h1> Latest Products </h1>
            <Row>
                {products.map((product) => (
                    // in grid totat 12 eatch xl take 3 , each sm take all
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <h3> {product.name} </h3>
                        {/* <Product product={product} /> */}
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default HomeScreen;
