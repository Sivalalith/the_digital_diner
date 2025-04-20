const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 3,
      maxLength: 20,
      required: true,
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      minLength: 4,
      maxLength: 20,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      maxLength: 70,
    },
    cost: {
      type: Number,
      min: 0,
      max: 1000,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxLength: 100,
    },
    veg: {
      type: Boolean,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
    collection: "menu",
  }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
