import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
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
  let userToken = JSON.parse(localStorage.getItem("token")) || null;
  const [cos, setCos] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    async function currentUser() {
      if (userToken) {
        let { username } = jwt.decode(userToken);
        JoblyApi.token = userToken;
        let current = await JoblyApi.currentUser(username);
        setCurrentUser(current);
        console.log(`currentUser is ${currentUser}`);
      }
    }
    currentUser();
  }, [token]);
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
    JoblyApi.token = null;
  }

  return (
    // TODO put in seperate route
    <div className="App">
      <BrowserRouter>
        <NavBar logout={logOut} currentUser={currentUser} />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/companies">
              <Companies companies={cos} setCos={setCos} />
            </Route>
            <Route path="/companies/:handle">
              <CompanyPage cantFind="/companies" />
            </Route>
            '
            <Route exact path="/jobs">
              <Jobs />
            </Route>
            <Route path="/login">
              <LoginForm login={login} />
            </Route>
            <Route path="/signup">
              <SignUpForm signUp={signUp} />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
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
