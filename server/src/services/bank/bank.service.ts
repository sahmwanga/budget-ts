import { TransferBaseService } from '../transfer.base';

export class BankService implements TransferBaseService {
  createTransaction<T>(obj: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  transfer<T>(obj: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  getTransfers<T>(): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}
