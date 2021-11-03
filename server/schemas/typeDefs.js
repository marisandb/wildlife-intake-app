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
    username: String
    email: String
  }

type Auth {
    token: ID
    employee: Employee
  }
type Query {
    animal(_id: ID!):Animal
  }
type Mutation {
    login(email: String!, password: String!): Auth
    addEmployee(username: String!, email: String!, password: String!): Auth
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