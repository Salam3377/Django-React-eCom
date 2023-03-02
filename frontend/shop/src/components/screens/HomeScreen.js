import React, {useState, useEffect} from 'react' // useState useEffect to make axios call from backend data
import { useDispatch, useSelector }  from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// import products from '../../products'
import Product from '../Product'
import { listProducts } from '../../actions/productActions'
import Loader from '../Loader'
import Message from '../Message'
import Paginate from '../Paginate'
import { useLocation, useNavigate } from 'react-router-dom'
// import axios from 'axios'
 
//import axios from 'axios';
//import products from '../products';
 
 
//const useQuery = () => {
//  return new URLSearchParams(useLocation().search);
//}
 
 
function HomeScreen() {
  //const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  
  //let keyword = useQuery().get("keyword")
 
  let keyword = useLocation().search //>>> '?keyword=abc'
  //console.log(keyword)
 
  const productList = useSelector(state => state.productList)
  const {error, loading, products, page, pages} = productList
 
 
  useEffect(() => {
    
    // async function fetchProducts() {
    //   const {data} = await axios.get('/api/products/')
    //   setProducts(data)
    // }
    // fetchProducts()
 
    dispatch(listProducts(keyword))
 
  }, [dispatch, keyword])
 
  //const products = []
 
  return <div>
      <h1>Latest Products</h1>
      {loading ? <Loader/>
          : error ? <Message variant='danger'>{error}</Message> //Hoặc: <Message variant='danger' children={error}></Message>
          :
          <div>
            <Row>
              {products.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
              ))}
            </Row>
 
            <Paginate page={page} pages={pages} />
 
          </div>
      }
      
  </div>;
}
 
export default HomeScreen;


// import React, {useState, useEffect} from 'react' // useState useEffect to make axios call from backend data
// import { useDispatch, useSelector }  from 'react-redux'
// import { Row, Col } from 'react-bootstrap'
// // import products from '../../products'
// import Product from '../Product'
// import { listProducts } from '../../actions/productActions'
// import Loader from '../Loader'
// import Message from '../Message'
// import { useLocation, useNavigate } from 'react-router-dom'
// // import axios from 'axios'

// function HomeScreen() {
//   // const [products,setProducts] = useState([])

//   const navigate = useNavigate()
//   const keyword  = useLocation().search

//   const dispatch = useDispatch()
//   const productList = useSelector(state => state.productList)
//   const { error, loading, products } = productList


//   useEffect(() => {
//     dispatch(listProducts(keyword))

//     // async function fetchProducts() {

//     //   const { data } = await axios.get('/api/products/') //http://localhost:8000 inside package.json
//     //   setProducts(data)
//     // }
//     // fetchProducts()
    
//   },[dispatch, keyword]) //empty array to make it load only when the component gets load

//   return (
//     <div>
//         <h1> Latest Products</h1>
//         {loading ? <Loader />
//           : error ? <Message variant='danger'>{error}</Message>
//             :
//             <Row>
//               {products.map(product => (
//                   <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                       <Product  product={product} />
//                   </Col>
//               ))}
//           </Row>
//       }
        

//     </div>
//   )
// }

// export default HomeScreen