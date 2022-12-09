import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

const todos = [{ description: "My first todo", done: true }];

app.get("/todos", function (req, res) {
  res.json(todos);
});

app.listen(3000);
