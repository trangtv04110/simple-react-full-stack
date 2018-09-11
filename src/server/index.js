const express = require('express');
const os = require('os');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => {
  res.send({ username: os.userInfo().username })
});

app.get('*', (req, res) => {
  if (process.env.production) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'))
  } else {
    res.sendFile(path.join(__dirname, '../../public/index2.html'))
  }
});

app.listen(8080, () => console.log('Listening on port 8080!'));
