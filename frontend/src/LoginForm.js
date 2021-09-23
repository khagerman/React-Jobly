import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginForm = ({ login }) => {
  const history = useHistory();
  // TODO WHERE TO SEND DATA
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
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
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

        <Button color="link">Login!</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
