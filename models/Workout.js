const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    enum: ["Resistance", "Cardio"],
    required: "You must select the type of exercise",
  },
  name: {
    type: String,
    trim: true,
    required: "You must enter a name",
  },
  duration: {
    type: Number,
    required: "You must specify a duration for this exercise",
  },
  weight: {
    type: Number,
    required: "You must enter a weight",
  },
  reps: {
    type: Number,
    required: "You must specify the amount of repititions",
  },
  sets: {
    type: Number,
    required: "You must specify the amount of sets",
  },
  distance: {
    type: Number,
    required: "You must enter the distance of this exercise",
  },
});

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [exerciseSchema],
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual attribute added to sum all durations, only to be displayed on the front-end. 'totalDuration' is not persisted in database.
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
