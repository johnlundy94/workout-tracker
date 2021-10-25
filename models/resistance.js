const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
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
        required: "Enter how many minutes you worked out for",
      },
      weight: {
        type: Number,
        required: "Enter how many pounds",
      },
      reps: {
        type: Number,
        required: "Enter how many reps",
      },
      sets: {
        type: Number,
        required: "Enter how many sets",
      },
    },
  ],
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;
