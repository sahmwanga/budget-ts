import express from 'express';
const appRoutes = express.Router();

import { TransferController } from '../controllers';

export default () => {
  appRoutes
    .route('/')
    .get(TransferController.getTransfers)
    .post(TransferController.createTransfer);
  return appRoutes;
};
