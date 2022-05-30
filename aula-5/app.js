import express from 'express';

import rotas from './routes/index.js';

const app = express();

app.use(express.json());

rotas(app);

export default app;