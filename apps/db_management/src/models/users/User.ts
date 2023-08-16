import mongoose from 'mongoose';
import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
  fullName: string;
  email: string;
  role: "guest" | "user" | "admin";
  password: string;
  confirmed: boolean;
  created: Date;
}

const UserSchema: Schema<UserInterface> = new Schema({
  fullName: {
    type: String,
    required: [true, "fullname not provided "],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: [true, "email not provided"],
    validate: {
      validator: function (v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Not a valid email!'
    }
  },
  role: {
    type: String,
    enum: ["guest", "user", "admin"],
    required: [true, "Please specify user role"]
  },
  password: {
    type: String,
    required: true
  },
  confirmed: {
    type: Boolean,
    default: false,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

(UserSchema.path("email") as any).options.trim = true;

export const User = model<UserInterface>("User", UserSchema);
