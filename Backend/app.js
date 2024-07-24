import express from 'express'
import studentRouter from './routes/student.js'

export const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/v1/student",studentRouter);