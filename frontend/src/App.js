import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm";
import Profile from "./Profile";
import Jobs from "./Jobs";
import LoginForm from "./LoginForm";
import JoblyApi from "./api";
import CompanyPage from "./CompanyPage";
import jwt from "jsonwebtoken";
function App() {
  let userToken = localStorage.getItem("token") || null;
  const [cos, setCos] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    async function currentUser() {
      if (userToken) {
        let { username } = jwt.decode(userToken);
        JoblyApi.token = userToken;
        let current = await JoblyApi.getUser(username);
        setCurrentUser(current);
        console.log(`currentUser is ${currentUser}`);
      }
    }
    currentUser();
  }, [userToken, token]);
  useEffect(() => {
    async function getData() {
      let companies = await JoblyApi.getCompanies();
      setCos(companies);
    }
    getData();
  }, []);
  async function signUp(data) {
    let tokenKey = await JoblyApi.signup(data);
    setToken(tokenKey);
    JSON.stringify(localStorage.setItem("token", tokenKey));
  }

  async function login(data) {
    let tokenKey = await JoblyApi.login(data);
    setToken(tokenKey);
    JSON.stringify(localStorage.setItem("token", tokenKey));
  }

  async function logOut() {
    setCurrentUser(null);
    setToken(null);
    localStorage.clear();
    JoblyApi.token = null;
  }
  function updateProfile(username, data) {
    JoblyApi.update = (username, data);
    setCurrentUser(data);
  }

  return (
    // TODO put in seperate route
    <div className="App">
      <BrowserRouter>
        <NavBar logout={logOut} currentUser={currentUser} />
        <main>
          <Switch>
            <Route exact path="/">
              <Home currentUser={currentUser} />
            </Route>

            <Route exact path="/login">
              <LoginForm login={login} />
            </Route>
            <Route exact path="/signup">
              <SignUpForm signUp={signUp} />
            </Route>
            {userToken ? (
              <Route exact path="/companies/:handle">
                <CompanyPage cantFind="/companies" />
              </Route>
            ) : (
              <Redirect to="/login" />
            )}
            {userToken ? (
              <Route path="/profile">
                <Profile updateUser={updateProfile} currentUser={currentUser} />
              </Route>
            ) : (
              <Redirect to="/login" />
            )}
            {userToken ? (
              <Route exact path="/companies">
                <Companies companies={cos} setCos={setCos} />
              </Route>
            ) : (
              <Redirect to="/login" />
            )}
            {userToken ? (
              <Route exact path="/jobs">
                <Jobs />
              </Route>
            ) : (
              <Redirect to="/login" />
            )}
            <Route>
              <h3>Hmmm. I can't seem to find what you want. :(</h3>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
