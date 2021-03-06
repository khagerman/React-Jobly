import React, { useState, useEffect } from "react";

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import Companies from "./Companies/Companies";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm/SignUpForm";
import Profile from "./Profile";
import Jobs from "./Jobs/Jobs";
import LoginForm from "./LoginForm/LoginForm";
import JoblyApi from "./api";
import CompanyPage from "./Companies/CompanyPage";
import jwt from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage";
import "./bootstrap.css";

function App() {
  const [cos, setCos] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [token, setToken] = useLocalStorage("token");
  // const [appliedJobs, setApplied] = useState(new Set([]));
  useEffect(() => {
    async function currentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
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
    let token = await JoblyApi.signup(data);
    setToken(token);
  }

  async function login(data) {
    let token = await JoblyApi.login(data);
    setToken(token);
  }

  async function logOut() {
    setCurrentUser(null);
    setToken(null);
    localStorage.clear();
  }
  function updateProfile(username, data) {
    JoblyApi.update = (username, data);
    setCurrentUser(data);
  }
  async function apply(id) {
    let updatedUser = await JoblyApi.apply(currentUser.username, id);
    setCurrentUser(updatedUser);
  }
  if (!infoLoaded) return <h3 className="p-3 text-center info">Loading...</h3>;
  return (
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
            {token ? (
              <Route exact path="/companies/:handle">
                <CompanyPage
                  currentUser={currentUser}
                  apply={apply}
                  cantFind="/companies"
                />
              </Route>
            ) : (
              <Redirect to="/login" />
            )}
            {token ? (
              <Route path="/profile">
                <Profile updateUser={updateProfile} currentUser={currentUser} />
              </Route>
            ) : (
              <Redirect to="/login" />
            )}
            {token ? (
              <Route exact path="/companies">
                <Companies companies={cos} setCos={setCos} />
              </Route>
            ) : (
              <Redirect to="/login" />
            )}
            {token ? (
              <Route exact path="/jobs">
                <Jobs currentUser={currentUser} apply={apply} />
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
