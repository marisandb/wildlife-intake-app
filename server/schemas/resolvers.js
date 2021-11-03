const { AuthenticationError } = require('apollo-server-express');
const { Employee, Animal } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        animal: async () => {
            return Animal.find().sort({ createdAt: -1 });
          },
    },
    Mutation: {
        addEmployee: async (parent, args) => {
            const employee = await Employee.create(args);
            const token = signToken(employee);
      
            return { token, employee };
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
          },
          addAnimal: async (parent, args, context) => {
            if (context.employee) {
              const animal = await Animal.create({ ...args, username: context.employee.username });
      
              await Employee.findByIdAndUpdate(
                { _id: context.employee._id },
                { $push: { thoughts: employee._id } },
                { new: true }
              );
      
              return thought;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
    }
}

module.exports = resolvers;
