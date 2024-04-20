const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: { type: String, default: null, trim: true },
    description: { type: String, default: null, trim: true },
    inventoryCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = model("product", ProductSchema, "products");
