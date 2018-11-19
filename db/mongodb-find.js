const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb server', err);
    }
    
    console.log('Successfully connected to Mongodb server');
    const db = client.db('TodoApp');
    

    db.collection('Todos').find({completed:true}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('unable to fetch data');
    });

    db.collection('Todos').find().count().then((count) => {
        console.log(count);
    }, (err) => {
        console.log('unable to fetch data');
    })
    

    

    client.close();
});

