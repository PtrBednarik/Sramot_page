const express = require('express');
const router = express.Router();

const {
    getAllTodos,
    getTodoByID,
    createTodo,
    deleteTodo,
    updateTodo
} = require("../controllers/TodoController");

router.get('/getAll', getAllTodos);
router.get('/get/:id', getTodoByID);

router.post('/new', createTodo);

router.put('/update/:id', updateTodo);

router.delete('/delete/:id', deleteTodo);

module.exports = router
