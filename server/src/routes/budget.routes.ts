import express, { Request, Response } from 'express';
const appRoutes = express.Router();

import { BudgetController } from '../controllers';

export default () => {
  appRoutes.get('/', BudgetController.findOne);

  return appRoutes;
};
