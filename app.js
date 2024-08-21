const express = require('express')
const app = express()

app.use(express.static('public'))

const PORT = 3001
app.listen(PORT, () => {
  console.log(`express server is running on port ${PORT}`)
})