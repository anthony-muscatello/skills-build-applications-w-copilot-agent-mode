import express from 'express';
import { connectDatabase } from './config/database';
import { baseUrl, port } from './config/server';
import apiRouter from './routes';

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-api', baseUrl });
});

async function startServer() {
  try {
    await connectDatabase();

    app.listen(port, '0.0.0.0', () => {
      console.log(`OctoFit API listening at ${baseUrl}`);
    });
  } catch (error) {
    console.error('Error starting OctoFit API:', error);
    process.exit(1);
  }
}

startServer();