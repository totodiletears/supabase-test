const supabase = require('../helpers/supabase');

const updateUser = async (from, to, id) => {
  const { data, error } = await supabase
    .from('users')
    .insert();

  console.log(data);
}

module.exports = { updateUser };

// todo

// check user exists?
// if not, create new user
// add token to user
// if transfer, remover from from


const users = require('../../db/users');
const girls = require('../../db/girls');

module.exports.updateUser = async function(from, to, id) {
  // check if receiving user exists
  const exists = users.some(address => {
    return address.user === to;
  })

  // if not => create user
  if (!exists) {
    // create a new user and array for their girls
    users.push({ user: to, girls: [] })
  }
  
  // find index of girl transferred
  const girlData = girls.findIndex(g => g.id === id);

  // push id to user
  users.filter(user => {
    if (user.user === to) {
      user.girls.push(girls[girlData]);
    }
  })

  // if not a mint, delete girl for user: from
  if (from !== '') {
    const fromIndex = users.findIndex(u => u.user === from);
    const girlsList = users[fromIndex].girls;
    const girlIndex = girlsList.findIndex(g => g.id === id);
    girlsList.splice(girlIndex, 1);
  }
}