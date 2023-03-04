import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; Shop</Col> {/* text center to center with padding*/}
                </Row>
            </Container>
        </footer>
  )
}

export default Footer