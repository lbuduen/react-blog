const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePictureURL: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  try {
    if (user.isModified("password") || user.isNew) {
      const saltRounds = 10;
      const hash = await bcrypt.hash(user.password, saltRounds);
      user.password = hash;
    }
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  const user = this;
  try {
    return await bcrypt.compare(password, user.password)
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = mongoose.model("User", userSchema);
