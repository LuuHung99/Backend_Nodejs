const todoModels = require('../models/todo.model');

async function index(req, res) {
  const todos = await todoModels.getAll();
  res.render('home', {
    title: 'homepage',
    todos: todos
  });
}

async function deleteById(req, res) {
  if(req.params && req.params.id) {
    await todoModels.deleteTodo(req.params.id);
  }
  res.redirect('/');
}

function create(req, res) {
  res.render('create', {title: 'create'});
}

async function postCreate(req, res) {
  if(req.body) {
    await todoModels.createTodos(req.body);
  }
  res.redirect('/');
}

async function update(req, res) {
  const id = req.params.id;
  const value =  await todoModels.findById(id);
  res.render('update', {
    title: 'update',
    value: value
  });
}

async function postUpdate(req, res) {
  if(req.body) {
    await todoModels.updateTodo(req.params.id, req.body);
  }
  res.redirect('/');
}

module.exports = {index, deleteById, create, postCreate, update, postUpdate};