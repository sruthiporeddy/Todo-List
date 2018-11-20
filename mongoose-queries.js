const objectId = require('mongodb');

const {mongoose} = require('./db/mongoose-connect');
const {Todo} = require('./model/todo');
const {User} = require('./model/user');

User.find().then((users) => {
    console.log(users);
});



User.findById('5bf45e0a639e4262ad8c5295').then((user) => {
  if(!user) {
     return console.log('User not found');
  }
  console.log('User found', user);
  console.log('User found', JSON.stringify(user,undefined,2));
},(err) => {
    console.log (err);
}).catch((e) => console.log(e));