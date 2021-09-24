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
import useLocalStorage from "./hooks/useLocalStorage";

// TODO ADD NOTIFICATIONS /FEEDBACK
function App() {
  const [cos, setCos] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage("token");
  // const [appliedJobs, setApplied] = useState(new Set([]));
  useEffect(() => {
    async function currentUser() {
      if (token) {
        let { username } = jwt.decode(token);
        JoblyApi.token = token;
        let current = await JoblyApi.getUser(username);
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
    let updatedUser = (JoblyApi.apply = (currentUser.username, id));
    setCurrentUser(updatedUser);
    // console.log(currentUser.applications);
    // setApplied(new Set([...appliedJobs, id]));
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
