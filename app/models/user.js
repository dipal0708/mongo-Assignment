const mongoose = require("mongoose"),
  crypto = require('../helpers/hash/generate'),
  Schema = mongoose.Schema,
  collection = new Schema({
    email: {
      value: {
        type: String,
        default: null,
        trim: true,
      },
      is_verified: {
        type: Boolean,
        default: false
      },
    },
    phone: {
      value: {
        type: String,
        default: null,
        trim: true,
      },
      is_verified: {
        type: Boolean,
        default: false
      },
    },
    first_name: {
      type: String,
      default: null,
      trim: true,
    },
    last_name: {
      type: String,
      default: null,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      default: null,
      maxlength: 191,
      set: (password) => crypto(password)
    },
    status: {
      type: Boolean,
      default: true
    },
  }, {
    strict: true,
    timestamps: true
  })


module.exports = mongoose.model("user", collection);
