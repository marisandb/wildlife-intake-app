import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_EMPLOYEE } from '../utils/mutations';
import {FormLabel, Input, Box, Button, Heading} from "@chakra-ui/react"


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addEmployee] = useMutation(ADD_EMPLOYEE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addEmployee({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addEmployee.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Already have an account? Click here to login</Link>
    <Box m="5">
      <Heading>Signup</Heading>
      <Heading as="h2" size="sm"> This page is for employees only </Heading>
    </Box>

    <Box m="5" width="250px">
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <FormLabel htmlFor="firstName">First Name:</FormLabel>
          <Input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <FormLabel htmlFor="lastName">Last Name:</FormLabel>
          <Input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <FormLabel htmlFor="pwd">Password:</FormLabel>
          <Input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        
        <div className="flex-row flex-end">
          <Button mt="5" colorScheme="green" type="submit">Submit</Button>
        </div>
      </form>
        </Box>
    </div>
  );
}

export default Signup;
