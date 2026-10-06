import { Router } from 'express';
import { Leaderboard } from '../models';

const router = Router();

router.get('/', async (_request, response) => {
  const leaderboard = await Leaderboard.find().sort({ rank: 1 });
  response.json({ leaderboard });
});

export default router;