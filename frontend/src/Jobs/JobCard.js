import React from "react";
import { Card, CardText, CardTitle, Button, CardBody } from "reactstrap";

function JobCard({ apply, id, title, salary, equity, currentUser }) {
  let jobs = currentUser.applications;

  return (
    <div>
      <Card className="bg-white m-3">
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
        </CardBody>

        <CardBody>
          <CardText>
            Salary: {salary}
            <br></br>
            Equity: {equity}
          </CardText>
          {jobs.length && jobs.includes(id) ? (
            <Button color="success" disabled={true}>
              Applied!
            </Button>
          ) : (
            <Button color="success" onClick={() => apply(id)}>
              Apply
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
export default JobCard;
