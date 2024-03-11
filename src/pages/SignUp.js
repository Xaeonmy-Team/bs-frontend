import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Button } from "reactstrap";

const SignUp = () => {
  const location = useLocation();
  const [signUpFormData, setSignUpFormData] = useState({
    email: location.state ? location.state.email : "",
    password: "",
    con_password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    // createUser(signUpFormData) - saving for later to define a method
    navigate("/Home");
  }

  return (
    <>
      <h3>Please Confirm Email and Password</h3>
      <br></br>
      <Form>
        <FormGroup>
          <Input
            id="email"
            name="email"
            placeholder="Type your email"
            type="text"
            value={signUpFormData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Input
            id="password"
            name="password"
            placeholder="Type your password"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Input
            id="con_password"
            name="con_password"
            placeholder="Confirm your password"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <br></br>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
}

export default SignUp;