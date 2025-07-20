const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  staatus: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
    required: true,
  },
});

exports.TodoModel = mongoose.model("Todo", todoSchema);
exports.todoSchema = todoSchema;
