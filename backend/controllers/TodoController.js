const Todo = require('../models/Todos')

exports.getAllTodos = async (req, res) => {
        const todos = await Todo.find();
        res.json(todos)
};
exports.getTodoByID = async (req, res) => {
    const t = await Todo.findById({_id : req.params.id })
    res.json(t)
};
exports.createTodo = async (req, res) => {
    const newTodo = new Todo(
        // req.body     //what is Vue App sending to DB
        {
            author: "Jozko Vajda",
            todo: "S radostou baby!"
        }
    );
    const savedTodo = await newTodo.save()
    res.json(savedTodo)
};

exports.deleteTodo = async (req, res) => {
    const tDelete = await Todo.findByIdAndDelete({_id : req.params.id })
    res.json(tDelete)
};
exports.updateTodo = async (req, res) => {
    const tUpdate = await Todo.updateOne(
        // {_id : req.params.id }, { $set: req.body }
        {
            author: "Stary Jano",
            todo: "Kto sa vcera posral?"
        }
    )
    res.json(tUpdate)
}
