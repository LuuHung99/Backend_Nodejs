const mongoose = require('mongoose');

const todosSchema = mongoose.Schema({ 
  title: String,
  status: String
});

todosSchema.statics.getAll = function() {
  return this.find().lean();
}

todosSchema.statics.deleteTodo = function(id) {
  return this.deleteOne({_id: id});
}

todosSchema.statics.createTodos = function(item){
  return this.create(item);
}

todosSchema.statics.findById = function(id) {
  return this.find({_id: id});
}

todosSchema.statics.updateTodo = function(id, item) {
  return this.updateOne({_id: id}, item);
}

module.exports = mongoose.model('Todos', todosSchema);

