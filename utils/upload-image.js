const supabase = require('../helpers/supabase');
const { decode } = require('base64-arraybuffer');
const basePath = process.cwd();
const fs = require("fs");

const path = process.cwd();

module.exports.uploadImage = async (buffer, type, id) => {

  // todo

  const { data, error } = await supabase
    .storage
    .from('images')
    .upload(`${id}.png`, b64toBlob(buffer), {
      contentType: 'image/png'
    });
    
  error ? console.log(error) : console.log(data)
}