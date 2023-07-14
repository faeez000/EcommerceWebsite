import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/ProductSlice";
import ProductDetails from "./ProductDetails";
import statusCode from "../utils/StatusCode";

function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    
    dispatch(getProducts());
   
  }, []);

  if (status === statusCode.LOADING) {
    return <Alert key="primary" variant="primary">Loading ......</Alert>;
  }
  if (status === statusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong... PLease try again later{" "}
      </Alert>
    );
  }

  const productCards = products?.map((product) => {
    return (
      <div
        className="col-md-3 gap-3 mb-3"
        style={{ marginBottom: "10px" }}
        key={product.id}
      >
        <Card
          style={{ width: "18rem" , marginLeft:"4%" }}
          className="h-100 shadow p-3 mb-5 bg-body-tertiary rounded"
        >
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <Card.Body style={{  height: "80px" }} >
            <Card.Title className="text-truncate" >{product.title}</Card.Title>
            <hr />
            <Card.Text  className="fs-5 fw-semibold" >₹ {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <ProductDetails productdata={product} />
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <h1>Product </h1> 
      <div className="row">{productCards}</div>
    </div>
  );
}

export default Product;
