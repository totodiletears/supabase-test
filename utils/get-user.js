const supabase = require('../helpers/supabase');

const getUser = async (address) => {
  const { data, error } = await supabase
    .from('metadata')
    .select(`
      id,
      preview
    `)
    .eq('owner_address', address)

  if (error) console.log(error);
  return data;
}

module.exports = { getUser };