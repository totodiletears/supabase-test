const { updateOwner } = require('../utils/update-owner');

module.exports.girlTransferred = async function(from, to, ID) {
  const id = Number(ID);
  if (from !== '0x0000000000000000000000000000000000000000') {
    await updateOwner(from, to, id);
  }
}