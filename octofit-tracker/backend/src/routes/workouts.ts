import { Router } from 'express';
import { Workout } from '../models';

const router = Router();

router.get('/', async (_request, response) => {
  const workouts = await Workout.find().sort({ difficulty: 1, durationMinutes: 1 });
  response.json({ workouts });
});

export default router;