import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Center.css";
const Profile = ({ currentUser, updateUser }) => {
  const history = useHistory();
  // TODO WHERE TO SEND DATA
  console.log(currentUser);

  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });

  // add item and reset form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateUser(currentUser.username, formData);
    console.log(formData);
    history.push("/companies");
  };
  // get data from form and make into object
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,

      [name]: value,
    }));
  };

  return (
    <div className="Center">
      <div className="text-center container">
        <h1>Hey, {currentUser.username}</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username:</Label>
            <Input
              sm={4}
              id="username"
              name="username"
              value={formData.username}
              disabled
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
          <FormGroup>
            <Label htmlFor="password">Enter password to make changes:</Label>
            <Input
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button className="m-3" color="warning">
            Edit Profile
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Profile;
