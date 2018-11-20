const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../model/todo');
const {User} = require('./../model/user');

const todos = [{
    text: 'First Todo item'
},{
    text: 'Second Todo item'
},{
    text: 'Third Todo item'
}];

const users = [{
    _id: new ObjectID(),
    email: 'sruthiporeddy@gmail.com'
},{
    _id: new ObjectID(),
    email:'babji2286@gmail.com'
}];

beforeEach((done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done()) ; 
   
});  
beforeEach((done) => {
    User.deleteMany({}).then(() => {
        return User.insertMany(users);
    }).then(() => done());
});


describe('POST /todos', () => {
    it('Should create a new Todo',(done) => {
        var text = 'Create a new Todo';
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err,res) => {
            if(err) {
                return done(err);
            }
            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
            
        });
    });

    it('Should not create a todo when invalid data is passed', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res) => {
            if(err) {
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(3);
                done();
            }).catch((e) => done(e));
        })
    })
});

describe('GET /todos', () => {
    it('Should get all the todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(3);
        })
        .end(done)
    });
});

describe('GET /users/:id', () => {
    it('Should get user based on Id', (done) => {
        request(app)
        .get(`/users/${users[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.user.email).toBe(users[0].email);
        })
        .end(done)
    });
    it('should not get user on empty Id', (done) => {
        var hexId = new ObjectID().toHexString();
        request(app)
        .get(`/users/${hexId}`)
        .expect(404)
        .end(done)
    })
    it('should not get user on invalid id', (done) => {
        request(app)
        .get(`/users/${users[0]._id.toHexString()+12}`)
        .expect(404)
        .end(done)
    })
});