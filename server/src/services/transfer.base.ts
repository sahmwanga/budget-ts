import { ITransfer } from '../models/types';

export abstract class TransferBaseService {
  abstract async createTransaction(obj: ITransfer): Promise<ITransfer>;

  abstract async transfer(obj: ITransfer): Promise<ITransfer>;

  abstract async getTransfers(): Promise<ITransfer[]>;
}
