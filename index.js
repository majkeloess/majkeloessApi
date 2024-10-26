const express = require('express');
const app = express();
const port = 2137;

app.get('/', (req, res) => {

  const jsnTest = { res: "Test" };

  res.json(jsnTest);
})

app.get("/test", (req, res) => {
  res.send("Hello test!");
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})