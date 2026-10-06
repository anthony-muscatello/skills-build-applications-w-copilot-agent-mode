import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    name: { type: String, required: true },
    focus: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    exercises: { type: [String], required: true },
    suggestedFor: { type: String, required: true },
  },
  { timestamps: true, collection: 'workouts' },
);

export const Workout = model('Workout', workoutSchema);