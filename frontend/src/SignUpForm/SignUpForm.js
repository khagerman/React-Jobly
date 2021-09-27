import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../Center.css";
import "./SignUpForm.css";
const SignUpForm = ({ signUp }) => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  // add item and reset form
  async function handleSubmit(evt) {
    evt.preventDefault();
    await signUp(formData);
    console.log(formData);
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
    <div className="Center SignUpForm m-3">
      <div className="text-center container">
        <Form onSubmit={handleSubmit}>
          <h1 className="display-4">Signup</h1>
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
          <FormGroup>
            <Label htmlFor="firstName">First name:</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="last">Last name:</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button color="info" className="m-3">
            Sign Up!
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
