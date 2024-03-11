import React, { useState } from "react"
import { Form, FormGroup, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
        // Redirect to /Home if sign-in is successful
        navigate("/Home")
      } else {
        // Handle sign-in error
        console.error("Sign-in failed")
      }
    } catch (error) {
      console.error("Error during sign-in:", error)
    }
  }

  return (
    <div>
      <Header></Header>
      <h3>Sign In</h3>
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
      <Footer></Footer>
    </div>
  )
}

export default SignIn