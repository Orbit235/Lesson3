const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('!!!!!!!!!')
})

app.post('/', (req, res) => {
    console.log(req)
    res.send('Got a POST request')
  })

app.listen(3000)