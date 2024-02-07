const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller');
const task = require('../controllers/tasks.controller');

//USER
router.post('/users/login', user.login);
router.post('/users', user.registration);
router.get('/users/:id', user.getProfile);
router.patch('/users/:id', user.saveProfile);

//TASK
router.get('/tasks/:id', task.getTask);
router.get('/tasks/user/:user_id', task.getUserTasks);
router.put('/tasks/:id', task.saveTask);
router.post('/tasks', task.newTask);
router.delete('/tasks/:id', task.deleteTask);
router.patch('/tasks/:id', task.deleteTask);

module.exports = router;