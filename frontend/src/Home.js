import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              All the jobs in one, convenient place.
            </h3>
            <Button color="info">
              {/* <Link to={`/add/${groupName}`}>Add to Menu</Link> */}
              Sign Up
            </Button>
            <Button color="info">
              Login
              {/* <Link to={`/add/${groupName}`}>Add to Menu</Link> */}
            </Button>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
