import React, { useState, useEffect } from "react";

import JoblyApi from "./api";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import JobCard from "./JobCard";

function CompanyPage({ apply, currentUser }) {
  let { handle } = useParams();

  const [co, setCo] = useState(null);

  useEffect(() => {
    async function getData() {
      let companyData = await JoblyApi.getCompany(handle);
      console.log(companyData);
      setCo(companyData);
    }
    getData();
  }, [handle]);
  console.log(co);
  if (!co) return <h3>Loading...</h3>;
  return (
    <div className="container text-center p-2">
      <h2>{co.name}</h2>
      <h6 className="text-muted pb-2">{co.description}</h6>
      <div>
        {co.jobs.map((job) => (
          <JobCard
            apply={apply}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            id={job.id}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
}
export default CompanyPage;
