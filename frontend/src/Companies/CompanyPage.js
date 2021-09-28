import React, { useState, useEffect } from "react";

import JoblyApi from "../api";

import { useParams } from "react-router-dom";
import JobCard from "../Jobs/JobCard";

function CompanyPage({ apply, currentUser }) {
  let { handle } = useParams();

  const [co, setCo] = useState(null);

  useEffect(() => {
    async function getData() {
      let companyData = await JoblyApi.getCompany(handle);

      setCo(companyData);
    }
    getData();
  }, [handle]);

  if (!co) return <h3 className="text-center">Loading...</h3>;
  return (
    <div className="container text-center p-2">
      <h2>{co.name}</h2>
      <h6 className="text-muted pb-2">{co.description}</h6>
      <div>
        {co.jobs.map((job) => (
          <JobCard
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
            id={job.id}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
}
export default CompanyPage;
