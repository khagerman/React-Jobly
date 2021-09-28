import React, { useState, useEffect } from "react";

import Search from "../Search";
import JoblyApi from "../api";
import JobCard from "./JobCard";
import "../Center.css";

function Jobs({ apply, currentUser }) {
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

  if (!jobs) return <h3 className="text-center">Loading...</h3>;

  return (
    <div>
      <div className="container text-center">
        <h1 className="display-4">Available Jobs</h1>
        <Search search={search} />
        {jobs.length !== 0 ? (
          <div className="row">
            {jobs.map((job) => (
              <JobCard
                currentUser={currentUser}
                id={job.id}
                apply={apply}
                title={job.title}
                salary={
                  job.salary ? (
                    job.salary.toLocaleString()
                  ) : (
                    <span className="text-warning">Not Available</span>
                  )
                }
                equity={
                  job.equity ? (
                    job.equity
                  ) : (
                    <span className="text-warning">Not Available</span>
                  )
                }
              />
            ))}
          </div>
        ) : (
          <p className="lead">Sorry, no results were found!</p>
        )}
      </div>
    </div>
  );
}

export default Jobs;
