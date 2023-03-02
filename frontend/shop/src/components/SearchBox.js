import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom'



const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}
 
 
function SearchBox() {
    const navigate = useNavigate();
    const location = useLocation(); 
 
    let q = useQuery().get("keyword")
    q = q ? q : ''
 
    const [keyword, setKeyword] = useState(q)

    useEffect(() => {
        setKeyword(q)
    }, [q])
 
 
    const submitHandler = (e) => {
        e.preventDefault()
 
        if(keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        }
        else {
            navigate(location.pathname)
        }
    }
 
    return (
        <Form onSubmit={submitHandler} className='d-flex'>
            <Form.Control
                type='text'
                name='q'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5 p-2'
            ></Form.Control>
 
            <Button
                type='submit'
                variant='outline-success'
                className='p-2 mx-md-1'
            >
                Submit
            </Button>
        </Form>
    )
}
 
export default SearchBox



// function SearchBox() {

//     const navigate = useNavigate()
//     const [keyword, setKeyword] = useState('')

//     let history = useLocation()

//     const submitHandler = (e) => {
//         e.preventDefault()
//         if (keyword) {
//             navigate(`/?keyword=${keyword}&page=1`)
//         } else {
//             navigate(navigate(history.location.pathname))
//         }
//     }
//     return (
//         <Form onSubmit={submitHandler} style={{display: 'flex'}} >
//             <Form.Control
//                 type='text'
//                 name='q'
//                 onChange={(e) => setKeyword(e.target.value)}
//                 className='me-sm-2 ml-sm-5'
//             ></Form.Control>

//             <Button
//                 type='submit'
//                 variant='outline-success'
//                 className='p-2'
//             >
//                 Submit
//             </Button>
//         </Form>
//     )
// }

// export default SearchBox