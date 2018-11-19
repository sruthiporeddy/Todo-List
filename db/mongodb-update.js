const {MongoClient ,ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb server', err);
    }
    
    console.log('Successfully connected to Mongodb server');
    const db = client.db('TodoApp');

  
   /* db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bf219913391305acdb84394')
    },{
        $set: {
           text:'Fold clothes' 
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log( err);
    }); */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bf1fc09588ed44f0aa8bb03')
    },{
        $set: {
          name:'keerthi'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log( err);
    });
    
    client.close();
});

