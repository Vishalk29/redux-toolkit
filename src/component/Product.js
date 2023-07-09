import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Product = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((result) => setProduct(result))
  }, [])
  // eslint-disable-next-line
  const cards = product.map((prod, key) => (
    <div className='col-md-3' style={{ marginBottom: '20px' }}>
      <Card style={{ width: '18rem' }} key={prod.id} className='h-100'>
        <div className='text-center'>
          <Card.Img
            variant='top'
            src={prod.image}
            style={{ width: '100px', height: '130px' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>INR :{prod.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'lightblue' }}>
          <Button variant='primary'>Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ))
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className='row'>{cards}</div>
    </>
  )
}

export default Product
