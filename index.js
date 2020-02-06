const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const TodoList = require("./todolist.js");

const app = express();

 const todolist = new TodoList();

app.engine("ejs", ejs.renderFile);

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (request, response) => {
  response.render("index.ejs");
});

app.post("/add", urlencodedParser, (request, response) => {
 
  todolist.add(request.body.todo);
  console.log(todolist);
  response.render("index.ejs", { todolist });
  
});

app.post("/remove", urlencodedParser, (request, response) => {
 
  todolist.remove(request.body.index);
  response.render("index.ejs", { todolist });
  
});


app.listen(8080);
