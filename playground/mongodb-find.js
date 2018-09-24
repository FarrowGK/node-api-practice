//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').find({_id: new ObjectID('5ba91513bc7fc6032aaf99f2')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  db.collection('Users').find({name: 'Johnny'}).count().then((count) => {
    console.log(`Todos count ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err)
  });

  //db.close();
});
