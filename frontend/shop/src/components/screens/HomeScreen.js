import React, {useState, useEffect} from 'react' // useState useEffect to make axios call from backend data
import { useDispatch, useSelector }  from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// import products from '../../products'
import Product from '../Product'
import { listProducts } from '../../actions/productActions'
import Loader from '../Loader'
import Message from '../Message'
// import axios from 'axios'

function HomeScreen() {
  // const [products,setProducts] = useState([])
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList

  useEffect(() => {
    dispatch(listProducts())
    // async function fetchProducts() {

    //   const { data } = await axios.get('/api/products/') //http://localhost:8000 inside package.json
    //   setProducts(data)
    // }
    // fetchProducts()
    
  },[dispatch]) //empty array to make it load only when the component gets load

  return (
    <div>
        <h1> Latest Products</h1>
        {loading ? <Loader />
          : error ? <Message variant='danger'>{error}</Message>
            :
            <Row>
              {products.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product  product={product} />
                  </Col>
              ))}
          </Row>
      }
        

    </div>
  )
}

export default HomeScreen