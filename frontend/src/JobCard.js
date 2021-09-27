import React, { useEffect } from "react";
import { Card, CardText, CardTitle, Button, CardBody } from "reactstrap";

function JobCard({ apply, id, title, salary, equity, currentUser }) {
  // todo this works

  // // todo But this doesn't
  let jobs = currentUser.applications;
  console.log(jobs);
  return (
    <div>
      <Card className="bg-white m-3">
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
