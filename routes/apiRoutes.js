const router = require("express").Router();
const Workout = require("../models/Workout");

router.get("/api/workouts", async (req, res) => {
  try {
    let workoutData = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]);
    res.status(200).json(workoutData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  const updateWorkout = await Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body,
    },
  });
  try {
    res.status(200).json(updateWorkout);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/api/workouts", async ({ body }, res) => {
  const newWorkout = await Workout.create(body);
  try {
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    let workoutData = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]).limit(7);
    res.status(200).json(workoutData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
