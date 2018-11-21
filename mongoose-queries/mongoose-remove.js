const objectId = require('mongodb');

const {mongoose} = require('./../mongoose_db/mongoose-connect');
//const {Todo} = require('./model/todo');
const {User} = require('./../model/user');

/*
User.remove({}).then((res) => {
    console.log(res);
}); */

/*User.findOneAndRemove({email:'sruthiporeddy@gil.com'}).then((user,) => {
    if(!user){
        return console.log('User not found');
    }
   console.log(user); 
}, (err) => {
    console.log(err);
}); */

User.findByIdAndRemove('5bf59e422175c26a7e30950a').then((user) => {
    if(!user){
        return console.log('User not found');
    }
   console.log(user); 
}, (err) => {
    console.log(err);
});

/*
User.deleteMany({email: 'sruthiporeddy@gmail.com'},(err,res) => {
    if(err) {
        return console.log('No users deleted');
    }
    console.log('Users deleted ',res);
})

User.findByIdAndDelete(id).then(() => {

});

User.findOneAndDelete().then(() => {

}); */