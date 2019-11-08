const express = require('express');
const helpers = require('../data/helpers');
const router = express.Router();

// Projects CRUD

router.post('/', (req, res) => {
    const newProject = req.body;
    if (!newProject.name) {
        res.status(400).json({ error: "Project Name is required" })
    } else {
        helpers.addProject(newProject)
        .then(resp => {
            console.log(resp);
            res.status(201).json(resp)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Server error adding project" })
        })
    }
})

router.get('/', (req, res) => {
    helpers.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Server error getting projects" })
    })
})

// Tasks CRUD

router.post('/:id/tasks', (req, res) => {
    const newTask = req.body;
    const { id } = req.params;
    if (!newTask.description) {
        res.status(400).json({ error: "Task Description is required" })
    } else {
        helpers.addTask(newTask, id)
        .then(resp => {
            console.log(resp);
            res.status(201).json(resp)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Server error adding task" })
        })
    }
})

router.get('/tasks', (req, res) => {
    helpers.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "TIME TO CRY IN THE SHOWER CUZ YO SERVER IS BROKE AF" })
    })
})

module.exports = router;