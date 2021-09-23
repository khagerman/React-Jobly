import React from "react";
import { Card, CardText, CardTitle, Button, CardBody } from "reactstrap";

function JobCard({ title, salary, equity }) {
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
          {/* <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink> */}
          <Button>Apply</Button>
        </CardBody>
      </Card>
    </div>
  );
}
export default JobCard;
