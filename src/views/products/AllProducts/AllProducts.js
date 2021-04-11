import React, { useState, useEffect } from "react";



import axios from "axios";

import * as $ from 'jquery';
import 'datatables.net';
import { useHistory } from "react-router";


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



/*----------------------------------------------------------------------------------------------


import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'



const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={6}>
        <CCard>
          <CCardHeader>
            Users
            <small className="text-muted"> example</small>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usersData}
            fields={[
              { key: 'name', _classes: 'font-weight-bold' },
              'registered', 'role', 'status'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/users/${item.id}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )
            }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={5}
            doubleArrows={false} 
            align="center"
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Users

--------------------------*/