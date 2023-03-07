var express = require('express');
var router = express.Router();
const utils = require('../utils/task-schema.js');

const tasks = [
    {
        id: 1,
        name: "Task 1",
        completed: false
    },
    {
        id: 2,
        name: "Task 2",
        completed: false
    },
    {
        id: 3,
        name: "Task 3",
        completed: false
    }
];

// GET
router.get("/tasks" , (request, response) => {
    response.json(tasks);
});

// GET (BY ID)
router.get("/tasks/:id" , (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).json({message: "The task with the provided ID does not exist"});
    response.json(task);
});

// POST
router.post("/tasks", (request, response) => {
    const { error } = utils.validateTask(request.body);
    if(error) return response.status(400).json({message:"The name should be at least 3 chars long!"})
    const task = {
        id: tasks.length + 1,
        name: request.body.name,
        completed: request.body.completed
    };

    tasks.push(task);
    response.status(201).json(task);
});

//PUT
router.put("/tasks/:id", (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).json({message:"The task with the provided ID does not exist."});
    const { error } = utils.validateTask(request.body);
    if(error) return response.status(400).json({message:"The name should be at least 3 chars long!"})
    task.name = request.body.name;
    task.completed = request.body.completed;
    response.json(task);
});



//PATCH
router.patch("/tasks/:id", (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).json({message:"The task with the provided ID does not exist."});
    const { error } = utils.validateTask(request.body);
    if(error) return response.status(400).json({message:"The name should be at least 3 chars long!"})
    task.name = request.body.name;
    if(request.body.completed) {
        task.completed = request.body.completed;
    }
    response.json(task);
});

//DELETE
router.delete("/tasks/:id", (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).json({message:"The task with the provided ID does not exist."});
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    response.json(task);
});


module.exports = router;