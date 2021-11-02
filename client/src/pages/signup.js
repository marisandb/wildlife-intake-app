import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_EMPLOYEE } from '../utils/mutations';
import {FormControl, FormLabel, Input, Select, RadioGroup, HStack, Radio, Button, Heading} from "@chakra-ui/react"


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
      <Link to="/login">← Go to Login</Link>

      <Heading>Signup</Heading>
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
          <Button colorScheme="green" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
