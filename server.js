const express = require('express');
const app = express();

const girl = require('./helpers/connection');
const { girlMinted } = require('./events/Minted');
const { girlTransferred } = require('./events/Transfer');

const { getMetadata } = require('./utils/get-metadata');
const { getUser } = require('./utils/get-user');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/metadata/:id', async (req, res) => {
  const id = req.params['id'];
  res.send(await getMetadata(id));
})

app.get('/user/:address', async (req, res) => {
  const address = req.params['address'];
  res.send(await getUser(address));
})

girl.on("Minted", girlMinted);
girl.on("Transfer", girlTransferred);

app.listen(3000, () => {
  console.log("server running on port 3000");
})