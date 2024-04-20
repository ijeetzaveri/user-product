const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate");
const { isAuth, authorizedUsers } = require("../middlewares/isAuth");

const { create, get, update, remove } = require("../controllers/product");

const {
  createProductSchema,
  updateProductSchema,
  getProductIdSchema,
} = require("../validations/product");

const { ROLES } = require("../utils/enums");

router.post(
  "/",
  isAuth,
  authorizedUsers([ROLES.ADMIN]),
  validate(createProductSchema),
  create
);
router.get(
  "/",
  isAuth,
  authorizedUsers([ROLES.ADMIN, ROLES.MANAGER]),
  get
);
router.put(
  "/:id",
  isAuth,
  authorizedUsers([ROLES.ADMIN, ROLES.MANAGER]),
  validate(updateProductSchema, getProductIdSchema),
  update
);
router.delete(
  "/:id",
  isAuth,
  authorizedUsers([ROLES.ADMIN]),
  validate(null, getProductIdSchema),
  remove
);

module.exports = router;
