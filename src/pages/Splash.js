import React, { useState } from 'react';
import HeaderNon from '../components/HeaderNon';
import FooterNon from '../components/FooterNon';
import { Form, FormGroup, Input, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';

const SignUpInital = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    navigate("/SignUp", { state: { email } })
  }

  const handleSignIn = () => {
    navigate("/SignIn")
  }

  return (
    <div>
      <HeaderNon />
      <Button onClick={handleSignIn}>Sign In</Button>
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
      <Button onClick={handleSubmit}>Submit</Button>
      <FooterNon />
    </div>
  )
}

export default SignUpInital