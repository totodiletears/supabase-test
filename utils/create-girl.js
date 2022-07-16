const supabase = require('../helpers/supabase');
const { Girl } = require('../models/Girl');

const createGirl = async (id) => {
  const girl = new Girl(id);
  const { data, error } = await supabase
    .from('metadata')
    .insert(girl);

  error ? console.log(error) : console.log(data);
  return girl;
}

module.exports = { createGirl };