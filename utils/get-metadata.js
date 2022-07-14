const supabase = require('../helpers/supabase');

const getMetadata = async (id) => {
  const { data, error } = await supabase
    .from('metadata')
    .select(`
      id,
      name,
      description,
      image,
      preview,
      attributes
    `)
    .eq('id', id)

  if (error) console.log(error);
  return data;
}

module.exports = { getMetadata };