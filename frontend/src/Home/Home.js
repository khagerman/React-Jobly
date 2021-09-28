import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import "../Center.css";
import "./Home.css";
import logo from "../logo.svg";
function Home({ currentUser }) {
  return (
    <div className="Home Center">
      <div className="container text-center">
        <Card className="bg-white">
          <CardBody className="text-center">
            <CardTitle>
              <h1 className="display-1 mb-4">Jobly</h1>
            </CardTitle>
            <img
              src={logo}
              className="mb-3"
              alt="magnify glass with briefcase"
            />
            <h3>All the jobs in one, convenient place.</h3>

            {!currentUser ? (
              <div>
                <Link to={`/signup`} className="btn btn-info">
                  Sign Up
                </Link>
                <Link className="btn btn-info m-3" to={`/login`}>
                  Login
                </Link>
              </div>
            ) : (
              <h3 className="lead p-3">
                Welcome Back, {currentUser.username}!
              </h3>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
