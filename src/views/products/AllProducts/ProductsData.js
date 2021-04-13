import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsData = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  //setData(data);
  
  return data;
};
export default ProductsData;
