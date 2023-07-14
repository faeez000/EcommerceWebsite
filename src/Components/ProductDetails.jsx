import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { useDispatch,useSelector } from "react-redux";
import { addProductToCart } from "../features/CartSlice";


function ProductDetails(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsInCart = useSelector(state=>state.cart)

  const dispatch = useDispatch();

  const addToCart = (product) => {
    if(productsInCart.includes(product)){
        return
    }
    else{
        // dispatch add action
        dispatch(addProductToCart(product));
    }

  };

  return (
    <div>
      <Button  variant="warning" size="sm" onClick={handleShow} >
        Product Details
      </Button>
      <Modal
        {...props}
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.productdata.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <img className="col-md-5 col-sm-5" src={props.productdata.image} />
          <p className="col-md-6">
            <p className="fs-3 fw-semibold">Description:</p>
            <p>{props.productdata.description}</p>
            <hr/>
            <p className="fs-3 fw-semibold">Price:</p> <p className="fw-semibold">₹ {props.productdata.price}</p>
          </p>
        </div>
        </Modal.Body>
        <Modal.Footer className="p-3 mb-2 bg-info-subtle text-emphasis-info">
          <Button  onClick={() => addToCart(props.productdata)}>Add To Cart</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductDetails;
