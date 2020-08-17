import { model, Schema, Document } from "mongoose";

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

export default model<IUser>("User", schema);
