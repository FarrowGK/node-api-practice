//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert To do', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //insert new doc into users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Johnny',
  //   age: 16,
  //   location: 'Germany'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert User', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  db.close();
});
