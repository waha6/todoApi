const express = require('express');
const app = express();
const mongoose = require('./config/db');
const todo = require('./model/todo');

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',console.log.bind(console,'connection Start'));

app.listen( process.env.NODE_ENV || 3000 , ()=>{console.log('server is conneted')});
app.use(express.json());
app.use('/add',(req, res)=>{
    let addTodo = new todo(req.query)
    addTodo.save().then(()=>console.log('Add new Todo Sucessfully'))
    .catch(()=>console.error('Adding Error'));
});
app.use('/delete',(req, res)=>{
    todo.findByIdAndDelete(req.query.id||"5c3fb91b486feb2ea432e0dd").then(()=>console.log('Delete id '+req.query.id+' SuccessFull'))
    .catch(()=>console.error('Delete request Error'));
});
app.use('/deleteall',(req, res)=>{
    todo.deleteMany({}).then(()=>console.log('Delete all SuccessFull'))
    .catch(()=>console.error('Delete all request Error'));
});
app.use('/',(req, res)=>{
    todo.find({}).then((a)=>{
        console.log('Find SuccessFull all todos');
        res.send(a);
    })
    .catch(()=>console.error('Find request Error'));
});