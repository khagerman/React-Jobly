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
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          name="searchTerm"
          placeholder="Enter search term.."
          value={formData}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" className="m-2 btn btn-info">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
