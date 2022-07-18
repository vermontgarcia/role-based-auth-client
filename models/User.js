// Users Model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
      required: "Email most be provided",
      unique: "Email already registered",
    },
    password: {
      type: String,
      required: "Password most be defined",
    },
    role: {
      type: String,
      enum: ["Admin", "Client", "User"],
      default: "User",
    },
    clientId: {
      type: Number,
      default: 100,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", UserSchema);
