import { Todo } from "../models/todo.model.js";

export const getTodo = async (req, res) => {
  try {
    const toDo = await Todo.find();

    res.status(200).json(toDo);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const saveTodo = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "text field is required" });
    }

    const data = await Todo.create({ text });

    console.log("Added Successfully...");
    console.log(data);

    res.status(201).json(data);
  } catch (error) {
    console.error("Error saving todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { _id, text } = req.body; // Ensure correct field name

    if (!_id || !text) {
      return res
        .status(400)
        .json({ error: "Both _id and text fields are required" });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(_id, { text });

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Updated successfully", updatedTodo });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const deleteTodo = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res.status(400).json({ error: "Todo ID is required" });
    }

    const deletedTodo = await Todo.findByIdAndDelete(_id);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Deleted successfully", deletedTodo });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
