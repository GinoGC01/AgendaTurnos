import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

const port = process.env.PORT ?? 1234
dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log(`Server has listening on https://localhost:${port}`)
})
