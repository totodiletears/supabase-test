require('dotenv').config();
const ethers = require('ethers');
const abi = require('../abi/girl.json');
const GIRL_CONTRACT = require('../config');

const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_PROVIDER);
const girl = new ethers.Contract(GIRL_CONTRACT, abi.abi, provider);

module.exports = provider;
module.exports = girl;