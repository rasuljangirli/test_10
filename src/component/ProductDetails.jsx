import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  useEffect(() => {}, []);

  const getProductById = () => {};

  return <div>ProductDetails {id}</div>;
}

export default ProductDetails;
