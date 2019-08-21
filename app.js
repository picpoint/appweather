const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Home Page !');
});


app.listen(port, () => {
  console.log(`Server starting at port ${port}`);
});