const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb server', err);
    }
    console.log('Successfully connected to Mongodb server');
    const db = client.db('TodoApp');
    /*
    db.collection('Todos').insertOne ({
        text:'Todos list',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert data to DB', err);
        }
        console.log('Successfully inserted data',JSON.stringify(result.ops,undefined,2));
    }); */

    db.collection('Users').insertOne({
        name:'sruthi',
        age:30,
        location:'philadelphia'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert data to DB', err);
        }
        console.log(JSON.stringify(result.ops,undefined, 2));
    });

    client.close();
});

