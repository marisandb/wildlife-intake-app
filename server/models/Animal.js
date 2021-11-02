const { Schema, model } = require('mongoose');

const animalSchema = new Schema(
  {
    speciesName: {
      type: String,
      trim: true
    },
    speciesAge: {
      type: Number,
    },
    pickup: {
      type: String,
    },
    circumstance: {
        type: String,
      },
    initObservations: {
        type: String,
    },
    findersName: {
        type: String,
      },
    findersNumber: {
      type: Number,
    },
    findersAddress: {
        type: String,
      },
  }
);


const Animal = model('Animal', animalSchema);

module.exports = Animal;
