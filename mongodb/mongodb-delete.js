const {MongoClient ,ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb server', err);
    }
    
    console.log('Successfully connected to Mongodb server');
    const db = client.db('TodoApp');

    /*db.collection('Todos').deleteMany({text:'Do laundry'}).then((res) => {
        console.log(res.deletedCount);
    }, (err) => {
        console.log( err);
    }); */
    db.collection('Todos').findOneAndDelete({
        _id: new ObjectID('5bf219913391305acdb84394')
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log( err);
    });

    
    client.close();
});

