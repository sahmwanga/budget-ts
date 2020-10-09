import express, { Request, Response } from 'express';
const appRoutes = express.Router();
import budgetRoute from './budget.routes';
import transferRoute from './transfer.route';

export default () => {
  appRoutes.use('/budget', budgetRoute());
  appRoutes.use('/transfer', transferRoute());

  return appRoutes;
};
