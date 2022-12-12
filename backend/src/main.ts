import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

const todos = [{ description: "My first todo", done: true }];

app.get("/todos", function (req, res) {
  res.json(todos);
});

app.post("/todos", function (req, res) {
  console.log(req.body);
  todos.push(req.body);
});

app.listen(3000);
