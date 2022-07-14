const { createGirl } = require('../utils/create-girl');
const { createImage } = require('../utils/create-image');
const { createPreview } = require('../utils/create-preview');

module.exports.girlMinted = async function(owner, ID) {
  const id = Number(ID);

  const girl = await createGirl(id);
  await createImage(girl);
  await createPreview(girl);
}