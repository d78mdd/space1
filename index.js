const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/output.html")
});


app.get('/urlMercury', (req, res) => {
  res.send("mercury")
});




app.listen(3000, () => {
  console.log('server started');
});