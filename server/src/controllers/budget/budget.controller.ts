import * as express from 'express';

export abstract class BudgetController {
  static async findOne(req: express.Request, res: express.Response) {
    return res.json({ data: 'lksfdj' });
  }
}
