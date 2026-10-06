import { connectDatabase } from './config/database';
import { app, baseUrl, port } from './server';

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