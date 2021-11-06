const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo

// 登入詳情頁
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

module.exports = router