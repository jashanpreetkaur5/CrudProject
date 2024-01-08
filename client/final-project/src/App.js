//--------------- App.js-------------------------------
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReadUser from "./components/ReadUser";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import Login from "./components/Login";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  //--------------routers--------------------------
  return (
    <Router>
      <div className="w3-container w3-margin-top">
        <header className="w3-container w3-blue">
          <h1>Crud App</h1>
          <nav className="w3-bar w3-blue">
            <Link to="/" className="w3-bar-item w3-button"></Link>
            {authenticated ? (
              <>
                <Link to="/users" className="w3-bar-item w3-button">
                  Users
                </Link>
                <Link to="/create" className="w3-bar-item w3-button">
                  Create User
                </Link>
              </>
            ) : null}
          </nav>
        </header>
        <main className="w3-container">
          <Switch>
            <Route path="/login">
              <h1>Welcome to the CRUD app! Please login to proceed.</h1>
              <Login setAuthenticated={setAuthenticated} />
            </Route>
            {authenticated ? (
              <>
                <Route path="/users" component={ReadUser} />
                <Route path="/create" component={CreateUser} />
                <Route path="/update/:id" component={UpdateUser} />
              </>
            ) : null}
            <Route path="/" exact>
              <h1>Welcome to the CRUD app! Please login to proceed.</h1>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
//-------------------------------------------------
