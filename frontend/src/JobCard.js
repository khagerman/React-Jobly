import React, { useEffect } from "react";
import { Card, CardText, CardTitle, Button, CardBody } from "reactstrap";

function JobCard({ apply, id, title, salary, equity, currentUser }) {
  // todo this works
  console.log(currentUser);
  // todo But this doesn't
  let jobs = currentUser.applications;

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle> */}
        </CardBody>

        <CardBody>
          <CardText>
            Salary: {salary}
            <br></br>
            Equity: {equity}
          </CardText>
          {jobs.indexOf(id) === -1 ? (
            <Button className="success" onClick={() => apply(id)}>
              Apply
            </Button>
          ) : (
            <Button className="success" disabled={true}>
              Applied!
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
export default JobCard;
