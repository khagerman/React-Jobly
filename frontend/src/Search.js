import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { InputGroup } from "reactstrap";

function Search({ search }) {
  const [formData, setFormData] = useState("");
  function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(`SEARCH ${formData}`);
    // JoblyApi.search(formData);
    if (formData !== "") search(formData);
    setFormData("");
  }

  function handleChange(e) {
    setFormData(e.target.value);
  }

  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control"
          name="searchTerm"
          placeholder="Enter search term.."
          value={formData}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-lg btn-info">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
