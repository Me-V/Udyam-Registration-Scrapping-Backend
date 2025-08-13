import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import aadhaarRouter from './routes/aadhaar.js'
import panRouter from './routes/pan.js'
import submitRouter from './routes/submit.js'

const app = express()
const PORT = 3001;

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/api/validate-aadhaar', aadhaarRouter)
app.use('/api/validate-pan', panRouter)
app.use('/api/submit', submitRouter)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})