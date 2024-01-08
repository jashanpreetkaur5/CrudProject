//---------Display user form----------------------------
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const ReadUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/read")
      .then((response) => {
        console.log("API response:", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const columnDefs = [
    { headerName: "Last Name", field: "lastName" },
    { headerName: "First Name", field: "firstName" },
    { headerName: "Date of Birth", field: "dob" },
    { headerName: "Address1", field: "address1" },
    { headerName: "Address2", field: "address2" },
    { headerName: "City", field: "city" },
    { headerName: "Postal Code", field: "postalCode" },
    { headerName: "Country", field: "country" },
    { headerName: "Phone Number", field: "phoneNumber" },
    { headerName: "Email", field: "email" },
    { headerName: "User Notes", field: "userNotes" },
    {
      headerName: "Actions",
      cellRenderer: (params) => (
        <Link to={`/update/${params.data._id}`} className="w3-button w3-blue">
          Update
        </Link>
      ),
    },
  ];

  return (
    <div className="w3-container w3-margin-top">
      <div className="w3-card-4">
        <div className="w3-container w3-blue">
          <h2>Our Users</h2>
        </div>
        <div
          className="ag-theme-alpine"
          style={{ height: "400px", width: "100%" }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={users}
            domLayout="autoHeight"
            pagination={true}
            paginationPageSize={10}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default ReadUser;
//----------------------------------------------------
