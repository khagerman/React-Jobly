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

function CompanyBox({ name, description }) {
  return (
    <>
      <section>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {name}
            </CardTitle>
            <CardText className="font-italic">{description}</CardText>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
export default CompanyBox;
