const basePath = process.cwd();
const layersDir = `${basePath}/assets`;
const supabase = require('../helpers/supabase');
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const width = 400;
const height = 400;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

const buildDir = `${basePath}/preview`;

const drawElement = async (layer) => {
  ctx.drawImage(layer, 0, 0, width, height);
}

const loadLayer = async (trait) => {
  return await loadImage(`${layersDir}/${trait.trait_type}/${trait.value}.png`);
}

module.exports.createPreview = async function (girl) {
  const { id, attributes } = girl;

  for (let i = 1; i < attributes.length; i++) {
    await drawElement(await loadLayer(attributes[i]));
  }

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`${buildDir}/${id}.png`, buffer);
  // await uploadImage(buffer, "preview/", id);
}