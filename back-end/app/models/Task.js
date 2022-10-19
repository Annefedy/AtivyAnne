const mongoose = require('mongoose');
const Schema = mongoose.Schema

module.exports = () => {
  const TaskSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    name_project: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
     createdAt: {
      type: Date,
      default: Date.now
    }
  })

  const Task = mongoose.model('Task', TaskSchema)

  return { Task }
}