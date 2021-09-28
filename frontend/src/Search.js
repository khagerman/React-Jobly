import React, { useState } from "react";

function Search({ search }) {
  const [formData, setFormData] = useState("");
  function handleSubmit(evt) {
    evt.preventDefault();

    if (formData !== "") search(formData);
    setFormData("");
  }

  function handleChange(e) {
    setFormData(e.target.value);
  }

  return (
    <form className="form-inline m-3" onSubmit={handleSubmit}>
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
