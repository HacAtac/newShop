import React, { useState, useEffect } from 'react'
import { Row, Col, AccordionCollapse } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      //data is the response from the server. It's an array of products.

      setProducts(data) //this is setting the state of the products to the data from the server. so that the products are now available in the state.
      //later we will use redux to store the products in the store or `global state`
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
