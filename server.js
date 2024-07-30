const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view ingine', 'ejs');
app.use(bodyParser.urlencoded( { extended: true }));
app.use(express.static('public'));

let todos = [];

app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.post('/add', (req, res) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.redirect('/');
});

app.listen('3000', () => {
  console.log('Server is running on http://localhost:3000');
});
