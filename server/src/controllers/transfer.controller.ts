import * as express from 'express';

export abstract class TransferController {
  static async getTransfers(req: express.Request, res: express.Response) {
    return res.json({ data: 'get transfer' });
  }

  static async createTransfer(req: express.Request, res: express.Response) {
    return res.json({ data: 'create transfer' });
  }
}
