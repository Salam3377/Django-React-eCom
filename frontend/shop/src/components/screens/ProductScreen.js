import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector }  from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form, ListGroupItem } from 'react-bootstrap'
import Rating from '../Rating'
import Loader from '../Loader'
import Message from '../Message'
import { listProductDetails } from '../../actions/productActions'
// import axios from 'axios'

// import products from '../../products'

function ProductScreen() {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    let navigate = useNavigate()
    const product_id  = useParams();
    // const product = products.find((p) => p._id === product_id.id)

    // const [product,setProduct] = useState([])

  useEffect(() => {

    dispatch(listProductDetails(product_id.id))

    // async function fetchProduct() {

    //   const { data } = await axios.get(`/api/products/${product_id.id}`) //http://localhost:8000 inside package.json
    //   setProduct(data)
    // }
    // fetchProduct()
    
  },[dispatch, product_id.id])

  const addToCartHandler = () => {
    navigate(`/cart/${product_id.id}?qty=${qty}`)
  }

    return (
    <div>
        <Link to ='/' className='btn btn-light my-3'>Back</Link>
        {loading?
            <Loader />
            : error
                ? <Message variant='danger'>{ error }</Message>
                : (
                    <Row>
                        <Col md={6}>
                            <Image src={product.image}  alt={product.name} fluid />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'> {/* variant flush removes borders*/}
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.numReviews} review`} color={'#f8e825'} />
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Price: ${product.price}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Description: {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>



                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                ${product.price}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>
                                                {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col xs='auto' className='my-1'>
                                                    <Form.Control
                                                    as='select'
                                                    value={qty}
                                                    onChange={(e) => setQty(e.target.value)}
                                                    >
                                                        {
                                                            [...Array(product.countInStock).keys()].map((x) =>(
                                                                <option key={x+1} value={x+1}>
                                                                    {x+1}
                                                                </option>
                                                            ) )
                                                        }
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}

                                    <ListGroup.Item>
                                        <Button
                                        onClick={addToCartHandler}
                                        className='col-12' 
                                        disabled={product.countInStock === 0} 
                                        type='button'>
                                            Add to Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
            )

        }

        
    </div>
  )
}

export default ProductScreen