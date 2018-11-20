var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var { mongoose } = require('./db/mongoose-connect');
var { Todo } = require('./model/todo');
var { User } = require('./model/user');

const port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());


app.post('/todos', (req,res) => {
  var todo = new Todo({
      text: req.body.text
  });

  todo.save().then((doc) => {
      res.send(doc);
      //console.log(doc);
  },(e) => {
      res.status(400).send(e)
  })
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({ todos});
    },(err) => {
        res.status(400).send(err);
    });
}); 

app.post('/users', (req,res) => {
    var user = new User({
        email: req.body.email
    });
  
    user.save().then((doc) => {
        res.send(doc);
        console.log(doc);
    },(e) => {
        res.status(400).send(e)
    })
});


app.get('/users', (req,res) => {
    User.find().then((users) => {
        res.send({ users});
    },(err) => {
        res.status(400).send(err);
    });
});

app.get('/users/:id', (req,res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    User.findById(id).then((user) => { 
        if(!user) {
            return res.status(404).send();
        }   
        res.send({user});
    }).catch((err) => res.status(400).send())
});

app.listen(port, () => {
console.log(`server started on ${port}`);
});

module.exports = {app};

