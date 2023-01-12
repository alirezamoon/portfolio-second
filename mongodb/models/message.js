import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  subject: { type: String },
  message: { type: String },
})

module.exports =
  mongoose.models.Message || mongoose.model("Message", MessageSchema)
