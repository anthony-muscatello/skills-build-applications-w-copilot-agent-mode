import { Router } from 'express';
import { Activity } from '../models';

const router = Router();

router.get('/', async (_request, response) => {
  const activities = await Activity.find().sort({ activityDate: -1 });
  response.json({ activities });
});

export default router;