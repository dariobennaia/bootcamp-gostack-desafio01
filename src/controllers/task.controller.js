const projects = require('../projects');

class TaskController {
  /**
   * Função responsavel por criar tasks no projeto.
   * @param {*} req 
   * @param {*} res 
   */
  create(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(obj => obj.id == id);
    project.tasks.push(title);
    
    return res.status(201).json(projects);
  }
}

module.exports = new TaskController();
