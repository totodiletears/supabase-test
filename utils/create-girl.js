const supabase = require('../helpers/supabase');
const { Girl } = require('../Girl');

const createGirl = async (id) => {
  const girl = new Girl(id);
  const { data, error } = await supabase
    .from('metadata')
    .insert(girl);

  return girl;
}

module.exports = { createGirl };