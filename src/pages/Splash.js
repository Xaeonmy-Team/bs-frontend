import React, { useState } from 'react';
import HeaderNon from '../components/HeaderNon';
import FooterNon from '../components/FooterNon';
import { Form, FormGroup, Input, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';

const SignUpInital = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    navigate("/SignUp", { state: { email } });
  };

  const handleSignIn = () => {
    navigate("/SignIn"); // Navigates to the SignIn page
  };

  return (
    <div>
      <HeaderNon />
      <ul>non functional header check</ul>
      <ul>login button check</ul>
      <Button onClick={handleSignIn}>Sign In</Button>
      <ul>Splash</ul>
      <ul>this will be a text box check</ul>
      <Form>
        <FormGroup>
          <Input
            id="email"
            name="email"
            placeholder="Type your email"
            type="text"
            value={email}
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <ul>this will be a submit button check</ul>
      {/* Button to submit the form */}
      <Button onClick={handleSubmit}>Submit</Button>
      <ul>non functional footer check</ul>
      <FooterNon />
    </div>
  );
};

export default SignUpInital;