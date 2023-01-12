import mongoose from "mongoose"

const connection = {}

const URI =
  "mongodb+srv://alireza97:U2P4TJsWjHV4GytU@cluster0.inhrd0u.mongodb.net/?retryWrites=true&w=majority"

async function dbConnect() {
  if (connection.isConnected) {
    return
  }

  const db = await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect
