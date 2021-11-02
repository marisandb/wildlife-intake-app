const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Animal {
    _id: ID
    speciesName: String
    speciesAge: Int
    pickup: String
    circumstance: String
    initObservations: String
    finderName: String
    finderNumber: String
    finderAddress: String
  }
type Employee {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
type Auth {
    token: ID
    employee: Employee
  }
type Query {
    employee: Employee
    animal: Animal
  }
type Mutation {
    addEmployee(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAnimal(speciesName: String,
        speciesAge: Int,
        pickup: String,
        circumstance: String,
        initObservations: String,
        finderName: String,
        finderNumber: String,
        finderAddress: String): Animal
    updateAnimal(speciesName: String,
        speciesAge: Int,
        pickup: String,
        circumstance: String,
        initObservations: String,
        finderName: String,
        finderNumber: String,
        finderAddress: String): Animal
  }
`;

module.exports = typeDefs;