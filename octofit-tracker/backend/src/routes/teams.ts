import { Router } from 'express';
import { Team } from '../models';

const router = Router();

router.get('/', async (_request, response) => {
  const teams = await Team.find().sort({ weeklyPoints: -1 });
  response.json({ teams });
});

export default router;