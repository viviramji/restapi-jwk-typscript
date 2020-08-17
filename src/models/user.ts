import { model, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  email: string;
  password: string;
}

const schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// * before save (pre save)

schema.pre<IUser>("save", async function (nextCallback) {
  const user = this;
  if (!user.isModified("password")) return nextCallback();

  // * encrypt process
  // * first generate a salt (str) to encrypt user password
  // * second generate a hash (password already encrypt)

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  nextCallback();
});

// * Define methods

schema.methods.comparePasswords = async function (
  password: string
): Promise<boolean> {
  const user = this;
  return await bcrypt.compare(password, user.password);
};

export default model<IUser>("User", schema);
