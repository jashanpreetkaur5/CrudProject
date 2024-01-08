//---------update user form---------
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const history = useHistory();

  const [user, setFormData] = useState({
    lastName: "",
    firstName: "",
    dateOfBirth: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
    email: "",
    userNotes: "",
  });

  const [loading, setLoading] = useState(true);
  //-------------------Fetching data------------------------
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetch user details for the given ID
        const response = await axios.get(
          `http://localhost:3000/api/update/${id}`
        );
        const userData = response.data;

        // Update the form data with the fetched user details
        setFormData({
          lastName: userData.lastName,
          firstName: userData.firstName,
          dateOfBirth: userData.dateOfBirth,
          address1: userData.address1,
          address2: userData.address2,
          city: userData.city,
          postalCode: userData.postalCode,
          country: userData.country,
          phoneNumber: userData.phoneNumber,
          email: userData.email,
          userNotes: userData.userNotes,
        });
      } catch (error) {
        console.error("Error fetching user details:", error.response.data);
        // Handle error, show a message, etc.
      }
    };

    fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...user, [name]: value });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3000/api/update/${id}`,
        user
      );
      console.log(response.data); // handle success

      // Redirect to the ReadUser page after a successful update
      history.push("/users");
    } catch (error) {
      console.error(error); // handle error
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/delete/${id}`
      );
      console.log(response.data); // handle success
      // Optionally, you can navigate the user to a different page or handle the UI accordingly
      history.push("/users");
    } catch (error) {
      console.error(error); // handle error
    }
  };

  //-------------------form data---------------------------
  return (
    <div className="w3-container w3-margin-top">
      <div className="w3-card-4">
        <div className="w3-container w3-green">
          <h2>Please update here!</h2>
        </div>
        <div className="w3-container">
          {/* Update user form */}
          <form onSubmit={handleUpdateUser} className="w3-container w3-card-4">
            <div className="w3-section">
              <label htmlFor="lastName" className="w3-text-green">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <label htmlFor="firstName" className="w3-text-green">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <label htmlFor="dob" className="w3-text-green">
                Date of Birth:
              </label>
              <input
                type="date"
                name="dob"
                value={user.dob}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <label htmlFor="address1" className="w3-text-green">
                Address1:
              </label>
              <input
                type="text"
                name="address1"
                value={user.address1}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <label htmlFor="address2" className="w3-text-green">
                Address2:
              </label>
              <input
                type="text"
                name="address2"
                value={user.address2}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <label htmlFor="city" className="w3-text-green">
                City:
              </label>
              <input
                type="text"
                name="city"
                value={user.city}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <label htmlFor="postalCode" className="w3-text-green">
                Postal Code:
              </label>
              <input
                type="text"
                name="postalCode"
                value={user.postalCode}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <label htmlFor="country" className="w3-text-green">
                Country:
              </label>
              <input
                type="text"
                name="country"
                value={user.country}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <label htmlFor="phoneNumber" className="w3-text-green">
                Phone Number:
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <label htmlFor="email" className="w3-text-green">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <label htmlFor="userNotes" className="w3-text-green">
                User Notes:
              </label>
              <input
                type="text"
                name="userNotes"
                value={user.userNotes}
                onChange={handleInputChange}
                className="w3-input w3-border"
              />
            </div>

            <div className="w3-section">
              <input
                type="submit"
                value="Update User"
                className="w3-button w3-green w3-margin-right"
              />
              <div className="w3-section">
                {/* Delete button */}
                <button onClick={handleDeleteUser} className="w3-button w3-red">
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
//-----------------------------------------------------------------------
