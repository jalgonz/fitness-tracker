const Workout = require("../models/workout");

module.exports = function(app){
    app.get("/api/workouts", function(req,res){
        Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    });

    app.post("/api/workouts", function(req,res){
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
    });

    app.get("/api/workouts/range", function(req,res){
        Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });

    app.put("/api/workouts/range", function(req,res){
        Workout.create({})
        .then(data =>
            res.json(data)
        )
        .catch(err => {
            res.json(err)
        })
    });

    app.get("/api/workouts/:id", ({body,params},res) => {
        workout.findByIdAndUpdate(
            params.id,
            {$push:{exercises:body}},
            {new: true,runValidators:true}
        )
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
    });

}