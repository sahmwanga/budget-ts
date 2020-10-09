import express, { Request, Response } from 'express';
const appRoutes = express.Router();

import { CategoryController } from '../controllers';

export default () => {
  appRoutes.get('/', CategoryController.findOne);

  return appRoutes;
};
