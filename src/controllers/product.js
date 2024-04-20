const { APIError } = require("../middlewares/APIError");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../services/product");

/**
 * Create a product
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.create = async (req, res) => {
  try {
    const payload = req.body;
    const data = await createProduct(payload);

    return res.status(201).json({
      status: true,
      message: "Product Created Successfully.",
      data,
    });
  } catch (error) {
    return res.status(error?.status ?? 500).json({
      status: false,
      error: error?.message ?? "Something went wrong while creating product..!",
    });
  }
};

/**
 * Get Products
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.get = async (req, res) => {
  try {
    const data = await getProducts();

    return res.status(200).json({
      status: true,
      message: "Get Products Successfully.",
      data,
    });
  } catch (error) {
    return res.status(error?.status ?? 500).json({
      status: false,
      error: error?.message ?? "Something went wrong while getting products..!",
    });
  }
};

/**
 * Update a product
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    const data = await updateProduct(id, payload);

    return res.status(200).json({
      status: true,
      message: "Product Updated Successfully.",
      data,
    });
  } catch (error) {
    return res.status(error?.status ?? 500).json({
      status: false,
      error: error?.message ?? "Something went wrong while updating product..!",
    });
  }
};

/**
 * Delete a product
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteProduct(id);

    return res.status(200).json({
      status: true,
      message: "Product Deleted Successfully.",
    });
  } catch (error) {
    return res.status(error?.status ?? 500).json({
      status: false,
      error: error?.message ?? "Something went wrong while deleting product..!",
    });
  }
};
