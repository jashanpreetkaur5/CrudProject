//------------------create user------------------
import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const CreateUser = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    dob: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
    email: "",
    userNotes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the server-----------------------
    axios
      .post("http://localhost:3000/api/create", formData)
      .then((response) => {
        // Handle success, you can redirect or show a success message
        console.log("User created successfully:", response.data);
        history.push("/users");
      })
      .catch((error) => {
        // Handle error, you can show an error message
        console.error("Error creating user:", error);
      });
  };

  //------------------form data----------------------
  return (
    <div className="w3-container w3-margin-top">
      <div className="w3-card-4">
        <div className="w3-container w3-purple">
          <h2>Create User Details here!</h2>
        </div>
        <div className="w3-container">
          {/* User creation form */}
          <form
            action="/create"
            method="POST"
            className="w3-container w3-card-4"
            onSubmit={handleSubmit}
          >
            <div className="w3-section">
              <label htmlFor="lastName" className="w3-text-purple">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>
            <div className="w3-section">
              <label htmlFor="firstName" className="w3-text-purple">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>
            <div className="w3-section">
              <label htmlFor="dob" className="w3-text-purple">
                Date of Birth:
              </label>
              <input
                type="date"
                name="dob"
                required
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>
            <div className="w3-section">
              <label htmlFor="address1" className="w3-text-purple">
                Address1:
              </label>
              <input
                type="text"
                name="address1"
                required
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>
            <div className="w3-section">
              <label htmlFor="address2" className="w3-text-purple">
                Address2:
              </label>
              <input
                type="text"
                name="address2"
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>
            <div className="w3-section">
              <label htmlFor="city" className="w3-text-purple">
                City:
              </label>
              <input
                type="text"
                name="city"
                required
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>
            <div className="w3-section">
              <label htmlFor="postalCode" className="w3-text-purple">
                Postal Code:
              </label>
              <input
                type="text"
                name="postalCode"
                required
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>
            <div className="w3-section">
              <label htmlFor="country" className="w3-text-purple">
                Country:
              </label>
              <input
                type="text"
                name="country"
                required
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>
            <div className="w3-section">
              <label htmlFor="phoneNumber" className="w3-text-purple">
                Phone Number:
              </label>
              <input
                type="text"
                name="phoneNumber"
                required
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>
            <div className="w3-section">
              <label htmlFor="email" className="w3-text-purple">
                Email:
              </label>
              <input
                type="email"
                name="email"
                required
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>
            <div className="w3-section">
              <label htmlFor="userNotes" className="w3-text-purple">
                User Notes:
              </label>
              <textarea
                name="userNotes"
                className="w3-input w3-border"
                onChange={handleChange}
              />
            </div>

            <div className="w3-section">
              <input
                type="submit"
                value="Add User"
                className="w3-button w3-purple"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
