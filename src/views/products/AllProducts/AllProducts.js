import React, { useState, useEffect } from "react";



import axios from "axios";

import * as $ from 'jquery';
import 'datatables.net';
import { useHistory } from "react-router";

import "./allproducts.css";

import productData from "./productData";  /* this is form productData json file*/ 


function AllProducts() {




  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async (id) => {
    // await axios
    //   .get("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => {
    //     console.log(response.data);
    //     setData(response.data);
    //   });
    
  const {data} = await axios.get("https://fakestoreapi.com/products")
  setData(data);

  $(document).ready(function() {
    $.noConflict();
    $('#example').DataTable();
});

};
const history = useHistory()

  return (
    <div>



{/* <CDataTable
            items={data}
            fields={[
              { key: 'id', },
              'title', 'price', 'category'
            ]}
            hover
            striped
            itemsPerPage={5}
           
            clickableRows
            onRowClick={(item) => history.push(`/users/${item.id}`)}
           
          /> */}

{/* ---------------------------------------------------- OUR DATA TABLE --------------------------------------------------------------*/}

      <h2>List of Products:</h2>
      <table id="example" className="display responsive nowrap">
        <thead>
          <tr>
         
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data,key) => {
            return (
              <tr id="itemrow"           
              onClick={() => history.push(`/products/${data.id}`)}
              >
                <td>{data.id}</td>
                <td>{data.title} </td>
                <td>{data.price}</td>
                <td>{data.category}</td>
                <td><img src={data.image} height="65px" width="65px"/></td>
              </tr>
             
            );
          })}
        </tbody>
      </table>
    </div>
  );
  
}

export default AllProducts;

