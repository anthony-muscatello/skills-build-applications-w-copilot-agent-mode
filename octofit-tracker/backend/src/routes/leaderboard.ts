import { Router } from 'express';
import { LeaderboardEntry } from '../models';

const router = Router();

router.get('/', async (_request, response) => {
  const leaderboard = await LeaderboardEntry.find().sort({ rank: 1 });
  response.json({ leaderboard });
});

export default router;