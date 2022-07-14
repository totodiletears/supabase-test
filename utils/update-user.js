const supabase = require('../helpers/supabase');

const updateUser = async (from, to, id) => {
  const { data, error } = await supabase
    .from('users')
    .insert();

  console.log(data);
}

module.exports = { updateUser };

// todo