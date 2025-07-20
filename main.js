const mongoose = require("mongoose");
const { TodoModel } = require("./src/models/todo.model");

async function createTodo() {
  try {
    await mongoose.connect(
      "mongodb+srv://weeraphatmain:5N4vxdDFRTSllkGp@cluster0.stiqlni.mongodb.net/todoFuture"
    );
    const todo = new TodoModel({
      name: "Learn MongoDB",
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
