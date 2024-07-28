import express from 'express'
import studentRouter from './routes/student.js'

export const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/v1/student",studentRouter);