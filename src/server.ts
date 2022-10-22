import express from "express"
import payload from "payload"
import path from "path"

require("dotenv").config()
const app = express()
const PORT = process.env.PORT
// expose assets directory as public
app.use("/assets", express.static(path.resolve(__dirname, "../assets")))

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin")
})

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  },
})

// Add your own express routes here
app.listen(PORT)
