const { Router } = require('express');
const projectCtrl = require('./controllers/project.controller');
const taskCtrl = require('./controllers/task.controller');

const createProject = require('./middlewares/create-project');
const updateProject = require('./middlewares/update-project');
const createTask = require('./middlewares/create-task');
const existsProject = require('./middlewares/exists-project');

const routes = Router();

routes.get('/projects', projectCtrl.index);
routes.get('/projects/:id', existsProject, projectCtrl.show);
routes.post('/projects', createProject, projectCtrl.create);
routes.put('/projects/:id', existsProject, updateProject, projectCtrl.update);
routes.delete('/projects/:id', existsProject, projectCtrl.delete);

routes.post('/projects/:id/tasks', existsProject, createTask, taskCtrl.create);

module.exports = routes;
