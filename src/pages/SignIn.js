import React, { useState } from "react"
import { Form, FormGroup, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(signInData)
      })
      if (response.ok) {
        navigate("/Home")
      } else {
        console.error("Sign-in failed")
      }
    } catch (error) {
      console.error("Error during sign-in:", error)
    }
  }

  return (
    <div>
      
      
      <Form>
        <FormGroup>
          <Input
            id="email"
            name="email"
            placeholder="Type your email"
            type="text"
            value={signInData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="password"
            name="password"
            placeholder="Type your password"
            type="password"
            value={signInData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Sign In</Button>
      </Form>
      
    </div>
  )
}

export default SignIn