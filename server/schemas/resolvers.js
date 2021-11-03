const { AuthenticationError } = require('apollo-server-express');
const { Employee, Animal } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        employee: async () => {

        },
        animal: async () => {
            return Animal.find().sort({ createdAt: -1 });
          }
    },
    Mutation: {
        addEmployee: async (parent, args) => {
            const employee = await Employee.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const employee = await Employee.findOne({ email });
      
            if (!employee) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await employee.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(employee);
      
            return { token, employee };
          }
    }
}

module.exports = resolvers;
