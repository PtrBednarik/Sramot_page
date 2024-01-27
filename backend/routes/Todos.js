const express = require('express');
const router = express.Router();
const Todo = require('../models/Todos')

//Get all todos routes
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos)
})

//Get Todo by ID
router.get('/get/:id', async (req, res) => {
    const t = await Todo.findById({_id : req.params.id })
    res.json(t)
})

//Create a new Todo
router.post('/new', async (req, res) => {
    const newTodo = new Todo(
        // req.body     //what is Vue App sending to DB
        {
            author: "Jozko Vajda",
            todo: "S radostou baby!"
        }
    );
    const savedTodo = await newTodo.save()
    res.json(savedTodo)
})

//Delete Todo by ID
router.delete('/delete/:id', async (req, res) => {
    const tDelete = await Todo.findByIdAndDelete({_id : req.params.id })
    res.json(tDelete)
})

//Update Todo by ID
router.put('/update/:id', async (req, res) => {
    const tUpdate = await Todo.updateOne(
        // {_id : req.params.id }, { $set: req.body }
        {
            author: "Stary Jano",
            todo: "Kto sa vcera posral?"
        }
    )
    res.json(tUpdate)
})

module.exports = router
