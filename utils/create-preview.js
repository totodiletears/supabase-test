const basePath = process.cwd();
const layersDir = `${basePath}/assets`;
const { createCanvas, loadImage } = require('canvas');
const { uploadImage } = require('./upload-image');

const width = 750;
const height = 750;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

const drawElement = async (layer) => {
  ctx.drawImage(layer, 0, 0, width, height);
}

const loadLayer = async (trait) => {
  return await loadImage(`${layersDir}/${trait.trait_type}/${trait.value}.png`);
}

module.exports.createPreview = async function (girl) {
  const { id, attributes } = girl;
  const isPreview = true;

  for (let i = 1; i < attributes.length; i++) {
    await drawElement(await loadLayer(attributes[i]));
  }

  let buffer = canvas.toBuffer('image/png');
  await uploadImage(buffer, isPreview, id).then(
    ctx.clearRect(0, 0, width, height)
  );
}