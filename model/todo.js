const mongoose = require('mongoose')
let todoSchema = new mongoose.Schema({
    title: String,
    });
let todo = mongoose.model('todos', todoSchema);
module.exports = todo;