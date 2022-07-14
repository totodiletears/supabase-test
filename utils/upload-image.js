const supabase = require('../helpers/supabase');

module.exports.uploadImage = async (buffer, isPreview, id) => {
  let name = "";
  isPreview ? name = `preview/${id}.png` : name = `${id}.png`;

  const { data, error } = await supabase
    .storage
    .from('images')
    .upload(name, buffer, {
      contentType: 'image/png',
      upsert: true
    });
    
  error ? console.log(error) : console.log(data)
}