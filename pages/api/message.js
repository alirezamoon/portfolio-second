import dbConnect from "mongodb/lib/dbConnect"
import Message from "mongodb/models/message"

export default async (req, res) => {
  const { method } = req
  dbConnect()
  switch (method) {
    case "GET":
      try {
        const message = await Message.find({})
        res.status(200).json({ success: true, data: message })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case "POST":
      try {
        const message = await Message.create(req.body)
        res.status(201).json({ success: true, data: message })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
