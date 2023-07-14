import React from 'react'
import { useSelector,useDispatch } from 'react-redux' 
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {removeProductFromCart} from "../features/CartSlice"
function Cart() {
  const productsInCart = new Set(useSelector(state=>state.cart))

  const cartProductsList = Array.from(productsInCart);
 
  const dispatch = useDispatch()

  const removeProduct = (productId)=>{
    dispatch(removeProductFromCart(productId))
  }

  const CartProduct =  cartProductsList?.map((product) => {
    return (
      <div className="col-md-3 gap-3 mb-3" style={{ marginBottom: "10px" }} key={product.id}>
        <Card style={{ width: "18rem" }}  className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>₹ {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger" onClick={()=>removeProduct(product.id)}>Remove Item</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <h1>Cart</h1>
      <div className='row'>
   
        {CartProduct}
        </div>
    </div>
  )
}


export default Cart
