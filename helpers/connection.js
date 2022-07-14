require('dotenv').config();
const ethers = require('ethers');
const abi = require('../abi/girl.json');

const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_PROVIDER);
const girl = new ethers.Contract(process.env.GIRL_CONTRACT, abi.abi, provider);

module.exports = provider;
module.exports = girl;