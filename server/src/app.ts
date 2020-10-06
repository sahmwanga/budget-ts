import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import appRoutes from './routes';

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(json());
app.use(appRoutes());

export { app };
