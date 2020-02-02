const projects = require('../projects');

class ProjectController {
  /**
   * Função responsavel por listar todos os projetos.
   * @param {*} req 
   * @param {*} res 
   */
  index(req, res) {
    return res.json(projects);
  }

  /**
   * Função responsavel mostrar os dados de projeto.
   * @param {*} req 
   * @param {*} res 
   */
  show(req, res) {
    const { id } = req.params;
    const project = projects.find(obj => obj.id == id);
    return res.json(project);
  }

  /**
   * Função responsavel por criar um novo projeto.
   * @param {*} req 
   * @param {*} res 
   */
  create(req, res) {
    const { id, title } = req.body;
    projects.push({ id, title, tasks: [] });
    return res.status(201).json(projects);
  }

  /**
   * Função responsavel por atualizar o titulo do projeto.
   * @param {*} req 
   * @param {*} res 
   */
  update(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    let project = projects.find(obj => obj.id == id);
    project.title = title;

    return res.json(project);
  }

  /**
   * Função responsavel por excluir um projeto.
   * @param {*} req 
   * @param {*} res 
   */
  delete(req, res) {
    const { id } = req.params;
    const project = projects.findIndex(obj => obj.id == id);
    projects.splice(project, 1);
    return res.json();
  }
}

module.exports = new ProjectController();
