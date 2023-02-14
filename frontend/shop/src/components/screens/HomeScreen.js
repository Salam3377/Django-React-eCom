import React, {useState, useEffect} from 'react' // useState useEffect to make axios call from backend data
import { Row, Col } from 'react-bootstrap'
import products from '../../products'
import Product from '../Product'
import axios from 'axios'

function HomeScreen() {
  const [products,setProducts] = useState([])

  useEffect(() => {

    async function fetchProducts() {

      const { data } = await axios.get('/api/products/') //http://localhost:8000 inside package.json
      setProducts(data)
    }
    fetchProducts()
    
  },[]) //empty array to make it load only when the component gets load

  return (
    <div>
        <h1> Latest Products</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product  product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen