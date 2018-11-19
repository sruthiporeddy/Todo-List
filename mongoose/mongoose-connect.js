const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: { 
         type : String,
         required: true,
         minlength: 1,
         trim: true

    },
    complete: {
        type:Boolean,
        default :false
    },
    completedAt: {
        type: Number,
        default: null
    }
        
});

var User = mongoose.model('User', {
    email: {
        type: String,
        required:true,
        trim: true,
        minlength: 1
    }
})


 
/*var newTodo = new Todo({
    text: 'Do laundary',
    complete: false,
    completedAt: 12
});

newTodo.save().then((res) => {
    console.log('Data saved successfully',res);
},(e) => {
    console.log('unable to save data');
}); */

var newUser = new User({
    email:'sruthiporeddy@gmail.com'
})

newUser.save().then((res) => {
    console.log('Data saved successfully',res);
},(e) => {
    console.log('unable to save data');
});
