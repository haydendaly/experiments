const express = require("express");
const pool = require("./db");

const PORT = 3000;

const app = express();
app.use(express.json()); // -> req.body

// Routes

// Get All Todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todo;"
        );
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Get a Todo
app.get("/todos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1;",
            [id]
        )
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Create a Todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a Todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updatedTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2;",
            [description, id]
        );
        res.json("Updated Todo");
    } catch (err) {
        console.error(err.message);
    }
})

// Delete a Todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );
        res.json("Deleted Todo");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(PORT, () => {
  console.log("Server on port " + PORT);
});
