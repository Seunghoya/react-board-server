const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const app = express()
const port = 4000

const router = require('./router/index');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: [
      'http://localhost:3000'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH', 'PUT'],
    maxAge: 3600
  })
);

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})