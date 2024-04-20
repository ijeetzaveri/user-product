const { Schema, model } = require("mongoose");

const { ROLES } = require("../utils/enums");

const UserSchema = new Schema(
  {
    username: { type: String, default: null, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    role: {
      type: String,
      default: ROLES.STAFF,
      enum: [...Object.values(ROLES)],
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", UserSchema, "users");
