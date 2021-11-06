const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo

// 登入新增頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

// 
router.post('/', (req, res) => {
  const UserId = req.user.id
  const name = req.body.name
  return Todo.create({ name, UserId }) 
    .then(() => res.redirect('/')) 
    .catch(error => console.log(error))
})

// 登入詳情頁
router.get('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({ where: { id, UserId } })
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

module.exports = router