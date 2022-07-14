const background = ["Puzzle", "Spiral", "Star", "Triangle"];
const clothes = ["Dress", "Jacket", "Leather", "Space Suit"];
const eyes = ["Closed", "Crying", "Green", "Wink"];
const hair = ["Braid", "Brown", "Purple", "White"];
const mouth = ["Fangs", "Happy", "Open", "Small", "Surprised"]
const nose = ["Nose"];

class Girl {
  constructor(id) {
    this.name = "Tokyo Gacha Girl";
    this.description = "Girls doing things";
    this.id = id;
    this.image = `http://image.com/image/${id}.png`;
    this.preview = `http://image.com/image/preview/${id}.png`;
    this.attributes = [
      {
        trait_type: "Background",
        value: background[Math.floor(Math.random() * background.length)]
      },
      {
        trait_type: "Body",
        value: "Body"
      },
      {
        trait_type: "Arms",
        value: "Arms"
      },
      {
        trait_type: "Clothes",
        value: clothes[Math.floor(Math.random() * clothes.length)]
      },
      {
        trait_type: "Eyes",
        value: eyes[Math.floor(Math.random() * eyes.length)]
      },
      {
        trait_type: "Hair",
        value: hair[Math.floor(Math.random() * hair.length)]
      },
      {
        trait_type: "Mouth",
        value: mouth[Math.floor(Math.random() * mouth.length)]
      },
      {
        trait_type: "Nose",
        value: nose[0]
      }
    ]
  }
}

module.exports = { Girl }