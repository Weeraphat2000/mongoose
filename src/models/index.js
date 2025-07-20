const { TodoModel } = require("./todo.model");

const mongoose = require("mongoose");
async function createTodo() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const todo = new TodoModel({
      name: "Learn MongoDB",
      status: "pending",
    });

    const savedTodo = await todo.save();
    console.log("Todo created:", savedTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
  }
}
createTodo();
