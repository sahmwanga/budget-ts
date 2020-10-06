import * as express from 'express';
import { IBudget } from '../models/types';

export default abstract class BaseController {
  abstract async findOne(
    res: express.Request,
    req: express.Response
  ): Promise<IBudget>;
  // protected abstract findAll(
  //   re: express.Request,
  //   res: express.Response
  // ): Promise<any>;
  // protected abstract deleteOne(
  //   re: express.Request,
  //   res: express.Response
  // ): Promise<any>;
  // abstract deleteAll(re: express.Request, res: express.Response): Promise<any>;
  // abstract create(re: express.Request, res: express.Response): Promise<any>;
}
