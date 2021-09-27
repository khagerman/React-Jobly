import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Center.css";
import "./LoginForm.css";
const LoginForm = ({ login }) => {
  const history = useHistory();

  const [formData, setFormData] = useState({ username: "", password: "" });
  // add item and reset form
  async function handleSubmit(evt) {
    evt.preventDefault();
    await login(formData);
    history.push("/companies");
  }
  // get data from form and make into object
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,

      [name]: value,
    }));
  };

  return (
    <div className="Center LoginForm m-3">
      <div className="text-center container-fluid">
        <Form onSubmit={handleSubmit}>
          <h1 className="text-center">Login</h1>
          <FormGroup>
            <Label htmlFor="username">Username:</Label>
            <Input
              sm={4}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <Button color="info">Login!</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
