const { updateUser } = require('../utils/update-user');

module.exports.girlTransferred = async function(from, to, ID) {
  if (from !== '0x0000000000000000000000000000000000000000') {
    await updateUser(from, to, Number(ID));
    console.log("Girl transferred: ", Number(ID));
  }
}

// todo