const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/user');

var userid = '5ba95a97573f630527148e7e';
// var id = '5ba97947536f5007050796c6';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// //if finding by something thats not an id for example email or username
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// //to find by id
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

//User find by id

User.findById(userid).then((user) => {
  if (!user) {
    return console.log('ID is not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));
