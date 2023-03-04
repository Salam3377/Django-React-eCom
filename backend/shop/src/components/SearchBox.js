import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
 
 
function SearchBox() {
    const navigate = useNavigate();
 
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
 
        if(keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        }
        else {
            navigate('/')
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