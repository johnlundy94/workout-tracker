const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter name of exercise",
      },
      duration: {
        type: Number,
        required: "Enter how many minutes you ran",
      },
      distance: {
        type: Number,
        required: "Enter how many miles you ran",
      },
    },
  ],
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
