import React, { useState, useEffect } from "react";

import {
  Card,
  CardBody,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CardBox from "./CompanyBox";
import Search from "./Search";
import JoblyApi from "./api";
import JobCard from "./JobCard";
function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getData() {
      let jobs = await JoblyApi.getJobs();

      setJobs(jobs);
    }
    getData();
  }, []);
  async function search(searchTerm) {
    setJobs(await JoblyApi.searchJobs(searchTerm));
  }
  //   TODO FIX
  if (!jobs) return <h3>Loading...</h3>;

  return (
    <>
      <h2>Available Jobs</h2>
      <Search search={search} />
      {jobs.length !== 0 ? (
        <div>
          {jobs.map((job) => (
            <JobCard
              title={job.title}
              salary={job.salary}
              equity={job.equity}
            />
          ))}
        </div>
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </>
  );
}

export default Jobs;
