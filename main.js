const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { TodoModel } = require("./src/models/todo.model");

dotenv.config();
async function createTodo() {
  try {
    console.log("env", dotenv.config().parsed);
    const env = dotenv.config().parsed;
    console.log("MONGODB_URI", process.env.MONGODB_URI);

    await mongoose.connect(env.MONGODB_URI);
    const todo = new TodoModel({
      name: "Learn MongoDB22222",
      status: "pending",
    });

    const savedTodo = await todo.save();
    console.log("Todo created:", savedTodo);

    mongoose.connection.close();
    return savedTodo;
  } catch (error) {
    console.error("Error creating todo:", error);
  }
}
createTodo();
