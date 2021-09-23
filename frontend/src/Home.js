import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
function Home({ currentUser }) {
  console.log(currentUser, "curent");
  return (
    <section className="container">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              All the jobs in one, convenient place.
            </h3>
            {!currentUser ? (
              <>
                <Button color="info">
                  {/* <Link to={`/add/${groupName}`}>Add to Menu</Link> */}
                  Sign Up
                </Button>
                <Button color="info">
                  Login
                  {/* <Link to={`/add/${groupName}`}>Add to Menu</Link> */}
                </Button>
              </>
            ) : (
              <h3 className="lead">Welcome Back, {currentUser.username}</h3>
            )}
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
