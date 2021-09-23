import React from "react";
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
function Companies({ companies, setCos }) {
  console.log(companies);
  async function search(searchTerm) {
    setCos(await JoblyApi.searchCompanies(searchTerm));
  }
  //   TODO fix
  //   if (!companies) return <h3>Loading...</h3>;
  return (
    <>
      <h2>Companies</h2>
      <Search search={search} />
      {companies.length !== 0 ? (
        <div>
          {companies.map((co) => (
            <Link to={`/companies/${co.handle}`} key={co.handle}>
              <CardBox name={co.name} description={co.description} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </>
  );
}
export default Companies;
