import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    mascot: { type: String, required: true },
    coach: { type: String, required: true },
    memberCount: { type: Number, required: true },
    weeklyPoints: { type: Number, required: true },
  },
  { timestamps: true, collection: 'teams' },
);

export const Team = model('Team', teamSchema);