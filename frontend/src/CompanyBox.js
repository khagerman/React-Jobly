import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function CompanyBox({ name, handle, description }) {
  return (
    <>
      <section>
        <Card className="mb-5">
          <CardBody>
            <CardTitle className="h4 font-weight-bold text-muted text-center">
              <Link className="stretched-link" to={`/companies/${handle}`}>
                {" "}
                {name}
              </Link>
            </CardTitle>
            <CardText className="font-italic">{description}</CardText>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
export default CompanyBox;
