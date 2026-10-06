import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    role: { type: String, required: true },
    teamName: { type: String, required: true },
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { timestamps: true, collection: 'users' },
);

export const User = model('User', userSchema);