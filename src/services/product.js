const { APIError } = require("../middlewares/APIError");

const PRODUCTS = require("../models/product");

/**
 * Create a product
 * @param {*} payload
 * @returns
 */
exports.createProduct = async (payload) => {
  try {
    return await PRODUCTS.create(payload);
  } catch (error) {
    throw error;
  }
};

/**
 * Get Products
 * @returns
 */
exports.getProducts = async () => {
  try {
    return await PRODUCTS.find();
  } catch (error) {
    throw error;
  }
};

/**
 * Update a product
 * @param {*} _id
 * @param {*} payload
 * @returns
 */
exports.updateProduct = async (_id, payload) => {
  try {
    const product = await PRODUCTS.findOne({ _id });
    if (!product) throw new APIError(422, "Invalid Product ID.");

    Object.assign(product, payload);

    return await product.save();
  } catch (error) {
    throw error;
  }
};

/**
 * Delete a product
 * @param {*} _id 
 * @returns 
 */
exports.deleteProduct = async (_id) => {
  try {
    const product = await PRODUCTS.findOne({ _id });
    if (!product) throw new APIError(422, "Invalid Product ID.");

    await product.deleteOne();

    return true;
  } catch (error) {
    throw error;
  }
};
