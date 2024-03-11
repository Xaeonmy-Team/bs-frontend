import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Button } from 'reactstrap';

const SignUp = (SignUp) => {
  const location = useLocation()
  const [signUpFormData, setSignUpFormData] = useState({
    email: location.state ? location.state.email : '',
    password: '',
    con_password: '',
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    }
    SignUp(userInfo)
    navigate("/SignIn")
    e.target.reset()
  
  //   if (signUpFormData.password !== signUpFormData.con_password) {
  //     alert('Password and Confirm Password do not match')
  //     return
  //   }
  //   navigate('/Home')
  }

  return (
    <>
      <h3>Please Confirm Email and Password</h3>
      <br></br>
      <Form>
        <FormGroup>
          <Input
            id='email'
            name='email'
            placeholder='Type your email'
            type='password'
            value={signUpFormData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Input
            id='password'
            name='password'
            placeholder='Type your password'
            type='password'
            onChange={handleChange}
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Input
            id='con_password'
            name='con_password'
            placeholder='Confirm your password'
            type='password'
            onChange={handleChange}
          />
        </FormGroup>
        <br></br>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
  }

export default SignUp
