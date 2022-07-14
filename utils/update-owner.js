const supabase = require('../helpers/supabase');

const updateOwner = async (from, to, id) => {
  const { data, error } = await supabase
    .from('metadata')
    .update({ owner_address: to })
    .match({ id: id })

  error ? console.log(error) : console.log(data);
}

module.exports = { updateOwner };