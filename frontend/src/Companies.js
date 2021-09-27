import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import CardBox from "./CompanyBox";
import Search from "./Search";
import JoblyApi from "./api";
function Companies({ companies, setCos }) {
  async function search(searchTerm) {
    setCos(await JoblyApi.searchCompanies(searchTerm));
  }
  //   TODO fix
  //   if (!companies) return <h3>Loading...</h3>;

  return (
    <div className="container text-center">
      <h1>Companies</h1>
      <Search search={search} />
      {companies.length !== 0 ? (
        <div>
          {companies.map((co) => (
            <div className="m-4" key={co.handle}>
              <CardBox
                name={co.name}
                description={co.description}
                handle={co.handle}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
}
export default Companies;
