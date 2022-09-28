require('dotenv').config()
var express = require('express')
var app = express()

var cors = require('cors')
app.use(cors({ optionsSuccessStatus: 200 }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' })
})

app.get('/api/whoami', (req, res) => {
  console.log(req.headers)
  res.json({
    ipaddress: req.ip,
    languange: req.headers['accept-language'],
    software: req.headers['user-agent']
  })
})

var listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
