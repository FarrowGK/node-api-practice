const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

// Todo.findOneAndRemove(_id: '5baabc8501338bca2b288690').then((todo) => {
//
// });

Todo.findByIdAndRemove('5baabc8501338bca2b288690').then((todo) => {
  console.log(todo);
});
