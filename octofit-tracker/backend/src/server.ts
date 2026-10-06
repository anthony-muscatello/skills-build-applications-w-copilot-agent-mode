import express from 'express';
import { baseUrl, port } from './config/server';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import teamsRouter from './routes/teams';
import usersRouter from './routes/users';
import workoutsRouter from './routes/workouts';

const app = express();

app.use(express.json());
app.use('/api/activities/', activitiesRouter);
app.use('/api/leaderboard/', leaderboardRouter);
app.use('/api/teams/', teamsRouter);
app.use('/api/users/', usersRouter);
app.use('/api/workouts/', workoutsRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-api', baseUrl });
});

export { app, baseUrl, port };