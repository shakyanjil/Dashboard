import React, { useEffect, useState } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

import CIcon from "@coreui/icons-react";
import axios from "axios";

import productData from "./productData"; /* this is from productData json file */

const Product = ({ match }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (id) => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setData(data);
  };

  const product = data.find(
    (product) => product.id.toString() === match.params.id
  );
  const productDetails = product
    ? Object.entries(product)
    : [
        [
          "id",
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];
  console.log(productDetails);

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>Product Id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {productDetails.map(([key, value], index) => {
                  return key !== "image" ? (
                    <tr key={index.toString()}>
                      <td>
                        <strong>{`${key}:`}</strong>
                      </td>
                      <td>{value}</td>
                    </tr>
                  ) : (
                    <tr key={index.toString()}>
                      <td>
                        <strong>{`${key}:`}</strong>
                      </td>
                      <td>
                        <img
                          src={value}
                          alt="image"
                          height="150px"
                          width="150px"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol>
        <h1>image:</h1>

        <img src="" alt="no image" />
      </CCol>
    </CRow>
  );
};

export default Product;
