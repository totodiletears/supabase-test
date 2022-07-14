const express = require('express');
const app = express();

const girl = require('./helpers/connection');
const { girlMinted } = require('./events/Minted');

const { getMetadata } = require('./utils/get-metadata');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/metadata/:id', async (req, res) => {
  const id = req.params['id'];
  res.send(await getMetadata(id));
})

girl.on("Minted", girlMinted);

app.listen(3000, () => {
  console.log("server running on port 3000");
})